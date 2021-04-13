import {Component, OnInit} from "@angular/core";
import {Board} from "../../model/board";
import {BoardService} from "../../services/board.service";
import {PlayerService} from "../../services/player.service";
import {Pit} from "../../model/pit";
import {Player} from "../../model/player";

@Component({
  selector: 'board-listing',
  templateUrl: './board.listing.component.html',
  styleUrls: ['./board.listing.component.scss']
})
export class BoardListingComponent implements OnInit {
  allPlayerBoards: Board[];
  allAvailableBoards: Board[];
  loggedUser: string;
  currentBoard: Board;
  currentPlayerOnePits: Pit[];
  currentPlayerTwoPits: Pit[];
  currentPlayerOneKalahPit:Pit;
  currentPlayerTwoKalahPit:Pit;

  constructor(
    private boardService: BoardService,
    private playerService: PlayerService
  ) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  createNewBoard() {
    this.boardService.createBoard().subscribe(
      () => {
        this.refresh();
      })
  }

  private refresh() {
    this.boardService.getAllPlayerBoards()
      .subscribe(data => {
        this.allPlayerBoards = data;
      });
    this.boardService.getAllAvailableBoards()
      .subscribe(data => {
        this.allAvailableBoards = data;
        if(this.allAvailableBoards && this.allAvailableBoards.length >0){
          this.setCurrentBoard(this.allAvailableBoards[0]);
        }
      })
    this.playerService.getLoggedUser()
      .subscribe(data => {
        console.log(data)
        if (!data) {
          window.location.href = "login";
        }
        this.loggedUser = data;
      })

  }

  private setCurrentBoard(board: Board) {
    this.currentBoard = board
    this.currentPlayerOnePits = [];
    this.currentPlayerTwoPits = [];
    let allPits = board.pitDtos;
    let pit = allPits[0]
    let i =0
    while(pit.pitType === 'SMALL'){
      this.currentPlayerOnePits.push(pit);
      pit = allPits[++i];
    }
    this.currentPlayerOneKalahPit = pit;
    pit = allPits[++i];
    while(pit.pitType === 'SMALL'){
      this.currentPlayerTwoPits.push(pit);
      pit = allPits[++i];
    }
    this.currentPlayerTwoKalahPit = pit;
  }

  joinBoard() {

  }

  moveStone(id: number) {

  }

  checkTurn(playerDto: Player) {
    if(!playerDto){
      return "disabled";
    }
    if(playerDto.username === this.currentBoard.currentPlayerDto.username
      && this.loggedUser === this.currentBoard.currentPlayerDto.username){
      return "";
    }
    return "disabled";
  }
}
