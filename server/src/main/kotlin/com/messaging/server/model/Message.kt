// src/main/kotlin/com/messaging/server/model/Message.kt
// Model = Table Definition (Like Knex Migrations)
package com.messaging.server.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity // This marks the class as a database table
data class Message(
    @Id // Marks this as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment
    val id: Long? = null, // Nullable for new messages before saving
    
    @Column(nullable = false) // Makes this column required
    val content: String, // The message text
    
    @Column(nullable = false)
    val sender: String, // Who sent it
    
    @Column(nullable = false)
    val recipient: String, // Who receives it
    
    @Column(nullable = false)
    val timestamp: LocalDateTime = LocalDateTime.now() // Auto-set to now
)
"""
Auto creates a table like so:
CREATE TABLE message (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    sender VARCHAR(255) NOT NULL,
    recipient VARCHAR(255) NOT NULL,
    timestamp DATETIME NOT NULL
);
"""