package org.jesperancinha.games.kalagameservice.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class PlayerDto(
    @JsonProperty("id")
    val id: Long?,
    @JsonProperty("username")
    val username: String?,
)