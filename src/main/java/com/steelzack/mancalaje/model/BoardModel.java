package com.steelzack.mancalaje.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.steelzack.mancalaje.objects.BoardImpl;
import com.steelzack.mancalaje.objects.Pit;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by joaofilipesabinoesperancinha on 03-04-16.
 */
@JsonAutoDetect
public class BoardModel {

    private PitModel largePit1;
    private PitModel largePit2;

    private String currentPlayerName;
    private Integer currentPlayerId;

    private List<PitModel> pits1;
    private List<PitModel> pits2;

    private String errorMessage;

    private boolean gameOver;
    private boolean gameExit;

    private String winnerPlayerName;

    private String sessionPlayer;
    private Integer sessionPlayerId;

    public BoardModel() {
        gameOver = false;
        gameExit = true;
    }

    public BoardModel(Pit largePit1, //
                      Pit largePit2, //
                      List<Pit> pits1, //
                      List<Pit> pits2, //
                      String currentPlayerName, //
                      Integer currentPlayerId, //
                      String errorMessage, //
                      boolean gameOver, //
                      String winnerPlayerName, //
                      String sessionPlayer, //
                      Integer sessionPlayerId) {

        this.currentPlayerName = currentPlayerName;
        this.currentPlayerId = currentPlayerId;

        this.winnerPlayerName = winnerPlayerName;
        this.sessionPlayer = sessionPlayer;

        this.largePit1 = new PitModel(largePit1.getnStones(), BoardImpl.PLAYER1, 0);
        this.largePit2 = new PitModel(largePit2.getnStones(), BoardImpl.PLAYER2, 0);

        this.sessionPlayer = sessionPlayer;
        this.sessionPlayerId = sessionPlayerId;

        this.pits1 = convertPitsToModel(pits1);
        this.pits2 = convertPitsToModel(pits2);

        this.errorMessage = errorMessage;
        this.gameOver = gameOver;

        this.gameExit = false;
    }

    private List<PitModel> convertPitsToModel(List<Pit> pits) {
        List<PitModel> modelPits = new ArrayList<>();
        for (Pit p : pits) {
            int clickMode = //
                    getclickMode(p, currentPlayerId, sessionPlayerId); //
            modelPits.add(new PitModel(p.getnStones(), p.getSharedKey(), clickMode));
        }
        return modelPits;
    }

    protected int getclickMode(Pit p, Integer currentPlayerIdP, Integer sessionPlayerIdP) {
        return currentPlayerIdP == p.getPlayer().getPlayerId() ? //
                (sessionPlayerIdP == currentPlayerIdP ? 1 : 2) //
                : 2;
    }

    public PitModel getLargePit1() {
        return largePit1;
    }

    public PitModel getLargePit2() {
        return largePit2;
    }

    public List<PitModel> getPits1() {
        return pits1;
    }

    public List<PitModel> getPits2() {
        return pits2;
    }

    public Integer getCurrentPlayerId() {
        return currentPlayerId;
    }

    public String getCurrentPlayerName() {
        return currentPlayerName;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setGameOver(boolean gameOver) {
        this.gameOver = gameOver;
    }

    public boolean isGameOver() {
        return gameOver;
    }

    public String getWinnerPlayerName() {
        return winnerPlayerName;
    }

    public String getSessionPlayer() {
        return sessionPlayer;
    }

    public boolean isGameExit() {
        return gameExit;
    }
}
