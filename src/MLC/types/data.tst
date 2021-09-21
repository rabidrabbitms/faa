${
    using static System.Char;
    using Typewriter.Extensions.Types;

    Template(Settings settings) {
        settings
            .IncludeCurrentProject()
            .IncludeReferencedProjects();

        settings.OutputFilenameFactory = file => ModuleSpecifierFromName(file.Classes.First().Name) + ".d.ts";
    }

    string Default(File file) => file.Classes.Select(@class => @class.Name)
        .Concat(file.Interfaces.Select(@interface => @interface.Name))
        .Concat(file.Enums.Select(@enum => @enum.Name))
        .FirstOrDefault();

    IEnumerable<Type> PropertyImports(File file) => NominallyUnique(file.Classes.SelectMany(PropertyImports))
        .Where(import => !TypeNames(file).Contains(import.Name))
        .Distinct();

    IEnumerable<Type> PropertyImports(Class @class) {
        foreach (var type in NominallyUnique(from property in @class.Properties
            let type = property.Type.Unwrap()
            where !type.Namespace.StartsWith("Newtonsoft")
            where type.Name != "Type"
            where type.Name.ToLower() != @class.Name.ToLower()
            where !type.IsPrimitive
            select type
            )
          )   yield return type;
    }

    IEnumerable<string> TypeNames(File file) {
        foreach (var @class in file.Classes)
            yield return @class.Name;
        foreach (var @interface in file.Interfaces)
            yield return @interface.Name;
      foreach (var @delegate in file.Delegates)
            yield return @delegate.Name;
    }


    string HeritageImports(File file) => string.Join("\r\n", file.Classes.SelectMany(HeritageImports).Distinct());

    IEnumerable<string> HeritageImports(Class @class) {
        foreach (var @interface in @class.Interfaces)
            yield return $"import {@interface.Name} from './{ModuleSpecifier(@interface)}';";
        if (@class.BaseClass != null)
            yield return $"import {@class.BaseClass.Name} from './{ModuleSpecifier(@class.BaseClass)}';";

    }

    IEnumerable<Type> NominallyUnique(IEnumerable<Type> types) =>
        from type in types
        group type by type.Name into byName
        select byName.First();

    string ModuleSpecifier(Type type) => ModuleSpecifierFromName(type.Name);
    string ModuleSpecifier(Class @class) => ModuleSpecifierFromName(@class.Name);
    string ModuleSpecifier(Interface @interface) => ModuleSpecifierFromName(@interface.Name);

    string ModuleSpecifierFromName(string identifier) =>
        string.Join("", identifier.Select((c, index) => index > 0 && IsUpper(c) ? "-" + ToLower(c) : c.ToString().ToLower()));

    string Heritage(Class @class) {
        if (@class.BaseClass != null)
            return $"extends {@class.BaseClass}";

        return null;
    }

    bool HasHeritage(File file) => file.Classes.Any(HasHeritage);
    bool HasHeritage(Class @class) => @class.BaseClass != null || @class.Interfaces.Any();

    bool Include(Class @class) =>
        @class.Namespace == "MLC.Data.Models"
        || @class.Namespace == "MLC.Models"
        || @class.FullName == "MLC.Data.Model";

}$PropertyImports[
import $Name from './$ModuleSpecifier';]$HasHeritage[
$HeritageImports
]
export default $Default;
$Classes(@class => Include(@class))[
export interface $Name $HasHeritage[extends $BaseClass $Interfaces[, $Name]]{$Properties[
    $Name?: $Type;]
}]