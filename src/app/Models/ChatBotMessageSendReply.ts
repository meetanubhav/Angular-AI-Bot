import { MessageTypeHead } from "../Utilities/Enums.enum"

export interface ChatBotMessageSendReply {
    Id : number,
    Type : MessageTypeHead
    Message : string
}
