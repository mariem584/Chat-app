import React,{useState,useContext, useEffect} from "react";
import { Context } from "./contexts";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
import("react-chat-engine").then((module) => module.ChatEngine) 
);

const MessageFormSocial = dynamic(() =>
import("react-chat-engine").then((module) => module.MessageFormSocial) 
);


export default function Chats() {
  const {username , secret} = useContext(Context)
  const [showChat, setshowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
   if(typeof document !== null)
   setshowChat(true)

  })
  
  
 useEffect(() => {
   if(username.length === 0 || secret.length === 0 ) router.push('/')

  })

  if(!showChat) return <div/>

  return <div className="background">
    <div className="shadow">
      <ChatEngine
      height="calc(100vh - 200px)"
      projectID=" 9dc001e2-6839-4d42-ab4f-9f659528b3bd"
      userName={username}
      userSecret={secret}     
      renderNewMessageForm={() => <MessageFormSocial/>}
      />
    </div>
  </div>;
}
