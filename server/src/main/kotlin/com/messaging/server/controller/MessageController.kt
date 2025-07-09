// src/main/kotlin/com/messaging/server/controller/MessageController.kt
package com.messaging.server.controller
// Controller = Routes (Like Express Router)

import com.messaging.server.model.Message
import com.messaging.server.repository.MessageRepository
import org.springframework.web.bind.annotation.*

@RestController // Marks this as a controller that returns JSON
@RequestMapping("/api/messages") // Base path for all routes
class MessageController(
    private val repository: MessageRepository // Spring injects this
) {

    // GET /api/messages - Get all messages
    @GetMapping
    fun getAllMessages(): List<Message> {
        return repository.findAll() // Uses the free method from JpaRepository
    }

    // GET /api/messages/bob - Get messages for a specific user
    @GetMapping("/{recipient}")
    fun getUserMessages(
        @PathVariable recipient: String // Gets {recipient} from URL
    ): List<Message> {
        return repository.findByRecipient(recipient)
    }

    // POST /api/messages - Create a new message
    @PostMapping
    fun createMessage(
        @RequestBody message: Message // Parses JSON body into Message object
    ): Message {
        return repository.save(message) // Saves to database
    }
}