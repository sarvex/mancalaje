package com.jofisaes.mancala.entities;

public class Store extends Hole {

    public Store(Player player, int id) {
        super(player, id);
        this.setStones(0);
    }

    public void addStones(int flushPickedUpStones) {
        super.addStones(flushPickedUpStones);
    }
}
