interface Entity {
  id: number;
}

export interface Music extends Entity {
  title: string;
  album: string;
  artist: string;
}

export interface Movie extends Entity {
  title: string;
  filmDirector: string;
}
