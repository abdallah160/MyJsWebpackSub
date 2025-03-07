import { Howl } from "howler";

export function playNotification() {
  const sound = new Howl({
    src: ["notification-2-269292.mp3"],
    volume: 1,
  });
  sound.play();
}
