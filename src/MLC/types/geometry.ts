

import area from './area';
import coordinates from './coordinates';
import Model from './Model';

export default geometry


export interface geometry  {
  bounds?: area;
  location?: coordinates;
  location_type?: string;
  viewport?: area;
}