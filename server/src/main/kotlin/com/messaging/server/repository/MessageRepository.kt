// src/main/kotlin/com/messaging/server/repository/MessageRepository.kt
// Repository = Database Operations (Like Knex Query Builder)
// Instead of writing SQL in controllers, we create an interface that Spring implements for us:

package com.messaging.server.repository

import com.messaging.server.model.Message
import org.springframework.data.jpa.repository.JpaRepository

// This interface gives us free database methods:
interface MessageRepository : JpaRepository<Message, Long> {
    // Spring automatically implements this method for us!
    fun findByRecipient(recipient: String): List<Message>
    
    // We get these methods for free:
    // - save(message) - inserts or updates
    // - findAll() - gets all messages
    // - findById(id) - finds by ID
    // - deleteById(id) - deletes by ID
    // ...and many more
}