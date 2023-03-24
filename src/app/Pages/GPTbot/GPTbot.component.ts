import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatBotMessageSendReply } from 'src/app/Models/ChatBotMessageSendReply';
import { OpenaiService } from 'src/app/Services/Openai.service';
import { MessageTypeHead } from 'src/app/Utilities/Enums.enum';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-GPTbot',
  templateUrl: './GPTbot.component.html',
  styleUrls: ['./GPTbot.component.scss']
})
export class GPTbotComponent implements OnInit,AfterViewInit  {

  @ViewChild('chatcontainer') private dataElementRef!: ElementRef;
  
  messages : ChatBotMessageSendReply[] = [];
  type = MessageTypeHead;
  public userinput : string;
  prompt : string = '';
  chatId = 0;

  constructor(
    private openaiService: OpenaiService
  ) {
    this.userinput = "";
  }
  ngAfterViewInit() {
    // window.setInterval(() => {
    //   const elem = this.dataElementRef.nativeElement;
    //   elem.scrollTop = elem.scrollHeight;
    // }, 1000);
  }
  ngOnInit() {
  }

  sendBotAQuery()
  {
    const apiKey = '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';
    this.openaiService.generateText(this.userinput).then(text => {
      // console.log(text);
      this.prompt = this.userinput;
      this.userinput = '';
      
      //Add data into array
      this.incrementChatId();
      this.messages.push(this.getTheUserMessageModelData());
      this.scrollToBottom();
      this.incrementChatId();
      this.messages.push(this.getTheBotMessageModelData(text ?? ""));
      this.scrollToBottom();
      //Clear the input box
    });
    // console.log(this.messages);
  }
  getTheUserMessageModelData()
  {
    let userData: ChatBotMessageSendReply = {
      Message : this.prompt,
      Type : this.type.USER,
      Id : this.chatId
    }
    return userData;
  }
  getTheBotMessageModelData(botReply : string)
  {
    let botReplyData: ChatBotMessageSendReply = {
      Message : botReply,
      Type : this.type.BOT,
      Id : this.chatId
    }
    return botReplyData;
  }
  incrementChatId()
  {
    this.chatId += 1;
  }
  
  SaveToFile() {
    const blob = new Blob([JSON.stringify(this.messages)], { type: 'application/json' });
    saveAs(blob, crypto.randomUUID()+'.json');
  }
  ngOnDestroy() {
    // this.SaveToFile();
  }
  scrollToBottom()
  {
    const elem = this.dataElementRef.nativeElement;
    elem.scrollTop = elem.scrollHeight;
  }

}
