package com.aml3A.Websocketdev.controller;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.aml3A.Websocketdev.Message;

@Controller
public class ChatController {

    @MessageMapping("/chat/{room}")
    @SendTo("/topic/{room}")
    public Message sendMessage(@DestinationVariable String room, Message message) {
        System.out.println("[WS " + room + "] " + message.getSender() + " : " + message.getContent());
        return message;
    }
}
