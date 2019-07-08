package com.jofisaes.mancala.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.jofisaes.mancala.game.BoardManager;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class Player implements Serializable {

    @JsonProperty("name")
    private String name;

    @JsonProperty("email")
    private String email;

    @JsonProperty("opponent")
    private Player opponent;

    @JsonIgnore
    private BoardManager boardManager;

    @JsonIgnore
    private List<Hole> allPlayerHoles;

    @JsonIgnore
    private Store playerStore;

    public void setHoles(List<Hole> allPlayerHoles, Store playerStore) {
        this.allPlayerHoles = allPlayerHoles;
        this.playerStore = playerStore;
    }
}
