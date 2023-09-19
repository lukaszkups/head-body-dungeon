export interface Tile {
  id: string | number;
  name: string;
  passable: boolean;
  width: number;
  height: number;
  texture?: string;
  action?: Function;
}

export interface TilePosition {
  x: number;
  y: number;
}

export const createTile = (tile: Tile, position: TilePosition) => {

}

