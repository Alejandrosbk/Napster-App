import { EventEmitter, Injectable } from '@angular/core';
import { SongsModel } from '@core/models/songs.model-interface';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  calback:EventEmitter<any> = new EventEmitter<any>();

  // TODO: VARIABLES PARA EL REPRODUCTOR
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);   // OBJETO QUE CONTIENE LA CANCION PARA PREODUCIR
  public audio!: HTMLAudioElement;   // REPRODUCTOR
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { 
    this.audio = new Audio();
    this.trackInfo$.subscribe(responseOK => {
      if (responseOK) {
        this.setAudio(responseOK);
      }
    })
    this.listenAllEvents();
  }

  private listenAllEvents():void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
  }

  
  // TODO: FUNCION PARA SETEAR EL STATUS DE LA CANCION
  private setPlayerStatus = (state: any) => {
    switch (state.type) { //TODO: --> playing
      case 'play':
        this.playerStatus$.next('play')
        break
      case 'playing':
        this.playerStatus$.next('playing')
        break
      case 'ended':
        this.playerStatus$.next('ended')
        break
      default:
        this.playerStatus$.next('paused')
        break;
    }
  }

  // TODO: FUNCION PARA CALCULAR EL TIEMPO DE LA CANCION
  private calculateTime = () => {
    const { duration, currentTime } = this.audio
    this.setTimeElapsed(currentTime)
    this.setRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

    // TODO: FUNCION PARA OBTENER EL TIEMPO ACTUAL Y TOTAL DE LA CANCION
  private setPercentage(currentTime: number, duration: number): void {
    //TODO duration ---> 100%
    //TODO currentTime ---> (x)
    //TODO (currentTime * 100) / duration
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage)
  }

  // TODO: FUNCION PARA EL MANEJO DE LOS VALORES DEL TIEMPO INICIAL DE LA CANCION
  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60) //TODO 1,2,3
    let minutes = Math.floor((currentTime / 60) % 60)
    //TODO  00:00 ---> 01:05 --> 10:15
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
  }
  
  // TODO: FUNCION PARA EL MANEJO DE LOS VALORES DEL TIEMPO RESTANTE DE LA CANCION
  private setRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(displayFormat)
  }


  // TODO: FUNCIONES PUBLICAS PARA EL REPRODUCTOR
  public setAudio(track: SongsModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

    // TODO: FUNCION PARA EL EVENTO PLAY/PAUSE
  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio
    const percentageToSecond = (percentage * duration) / 100
    this.audio.currentTime = percentageToSecond
  }
}
