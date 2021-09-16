import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(private animationCtrl: AnimationController) {}
  chats: Array<Chat> = [];
  loading: boolean = false;
  ngOnInit() {
    this.loading = true;
    this.chats = [
      new Chat(1, "Hi, I'm Looky! I'm always looking out for great values for you", "Hi, I'm Looky!  ...", true, false),
      new Chat(2, "You can select from a wide range of vacation options made affordable through easy payments with no interest.", "You can select from  ...", false, true),
      new Chat(3, "Plus, every quarter we offer limited-availability special buys of cool products available with easy payments with no interest.", "Plus every quarter we offer  ...", false, true),
      new Chat(4, "Sign up today - there is no obligation to buy!", "Sign up today  ...", false,true)
    ]
    //this.ArrayPlusDelay(this.chats, function (obj) { obj.Hidden = false; obj.Selected = true; }, 5000);
    console.log(this.chats);
    let counter = 1;
    let elemID = 4
    const timer = setInterval(() => {
      if (counter > (this.chats.length-1))
        clearInterval(timer);
      if (counter > 1) {
        const previousElem = document.getElementById("chat" + (elemID).toString());
        this.chats[counter - 2].Selected = false;
        const moveChat =
          this.animationCtrl.create()
            .addElement(previousElem)
            .duration(750)
            .easing('ease-in')
            .fromTo('transform', 'translateY(-75px)', 'translateY(-245px)');
        moveChat.play();
      }

      const chat = this.chats[counter -1];
    
      chat.Hidden = false;
      chat.Selected = true;

      const elem = document.getElementById("chat" + (elemID).toString());

      const animation = this.animationCtrl.create()
        .addElement(elem)
        .duration(4500)
        .beforeStyles({top:'225px'})
        .easing('ease-in')
        .fromTo('transform', '150px','150px');
      animation.play();

      counter++;
      elemID--;
    }, 5000);

    this.loading = false;
  }


  showChat(chat) {
    chat.Selected = true;
    chat.Hidden = false;
  }

  selectChat(chat) {
    for (let c of this.chats) {
      c.Selected = false;
    }
    chat.Selected = true;
  }

  createAnimation(element: string, movementStart: string, movementEnd: string, duration: number) {
      const animation: Animation = this.animationCtrl.create()
        .addElement(document.querySelector(element))
        .duration(duration)
        .easing('ease-in')
        .fromTo('transform', 'translateY(' + movementStart + 'px)', 'translateY(' + movementEnd + 'px)');
      animation.play();   
  }

}
class Chat {
  Order: number;
  LongText: string;
  ShortText: string;
  Selected: boolean;
  Hidden: boolean;
  constructor(order, longText, shortText, selected, hidden) {
    this.Order = order;
    this.LongText = longText;
    this.ShortText = shortText;
    this.Selected = selected;
    this.Hidden = hidden;
  }
}
