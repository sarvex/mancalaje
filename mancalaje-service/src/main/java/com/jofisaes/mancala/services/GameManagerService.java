package com.jofisaes.mancala.services;

import com.jofisaes.mancala.entities.Player;
import com.jofisaes.mancala.game.BoardManager;
import com.jofisaes.mancala.game.RoomsManager;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.ApplicationScope;

import java.util.HashMap;
import java.util.Map;

@Service
@ApplicationScope
public class GameManagerService {

    private Map<Long, BoardManager> boardManagerMap = new HashMap<>();

    private RoomsManager roomsManager = new RoomsManager();

    public void createBoard(Player player, String boardName) {
        Long highestId = boardManagerMap.keySet().stream().max(Long::compare).orElse(0L) + 1;
        BoardManager board = BoardManager.create(player, highestId,boardName);
        boardManagerMap.put(highestId, board);
        roomsManager.getBoardManagers().add(board);
    }

    public RoomsManager listAllGames() {
        return roomsManager;
    }

    public BoardManager joinPlayer(Long boardManagerId, Player player2) {
        BoardManager boardManager = boardManagerMap.get(boardManagerId);
        boardManager.setPlayer2(player2);
        return boardManager;
    }

    public void swayStonesFromHole(Player sessionUser, Integer holeId) {
        sessionUser.getBoardManager().swayStonesFromHole(sessionUser, holeId);
    }
}
