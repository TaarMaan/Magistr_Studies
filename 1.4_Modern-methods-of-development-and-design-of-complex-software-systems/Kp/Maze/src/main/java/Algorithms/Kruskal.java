package Algorithms;

import GridModel.Grid;
import GridModel.Tile;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 *
 * @author frank
 */
public class Kruskal extends MazeGeneration
{
    public Kruskal()
    {
        super();
    }

    @Override
    public void algorithm(Grid model)
    {
        HashMap<Tile, Integer> cell = new HashMap<>();
        List<Tile> walls = new ArrayList<>();

        // Add walls to list
        Tile[][] grid = model.getGrid();
        int id = 0;
        for(int y = 0; y < model.getYSize(); y++)
        {
            for(int x = 0; x < model.getXSize(); x++)
            {
                if(x % 2 == 0 && y % 2 == 0)
                    cell.put(grid[x][y], id++);
                else
                {
                    if(x == y) continue;
                    walls.add(grid[x][y]);
                }
            }
        }

        // Stop when all cells have been visited
        while(!walls.isEmpty())
        {
            Tile wall = walls.get(this.getRandomInt(walls.size(), 0));
            walls.remove(wall);

            // If wall's y coord is even, we join left and right tile
            // If wall's x coord is even, we join top and down tile
            if(wall.getY() % 2 == 0)
                this.clearWallSides(wall, model.getEastTile(wall), model.getWestTile(wall), cell);
            else if(wall.getX() % 2 == 0)
                this.clearWallSides(wall, model.getNorthTile(wall), model.getSouthTile(wall), cell);
        }
    }

    private void clearWallSides(Tile wall, Tile sideA, Tile sizeB, HashMap<Tile, Integer> cell)
    {
        if(Objects.equals(cell.get(sideA), cell.get(sizeB))) return;

        Integer bVal = cell.get(sizeB);
        List<Tile> change = new ArrayList<>();

        Iterator iter = cell.entrySet().iterator();
        while(iter.hasNext())
        {
            Map.Entry me = (Map.Entry) iter.next();

            if(me.getValue() == bVal)
            {
                iter.remove();
                change.add((Tile) me.getKey());
            }
        }

        for(Tile tile : change)
        {
            cell.put(tile, cell.get(sideA));
        }

        // Visualization logic
        long timeWait = 10;
        this.painter.drawTile(sideA, null, null, Tile.Type.HIGHLIGHT, timeWait);
        this.painter.drawTile(sideA, null, null, Tile.Type.EMPTY, timeWait);
        this.painter.drawTile(wall, null, null, Tile.Type.HIGHLIGHT, timeWait);
        this.painter.drawTile(wall, null, null, Tile.Type.EMPTY, timeWait);
        this.painter.drawTile(sizeB, null, null, Tile.Type.HIGHLIGHT, timeWait);
        this.painter.drawTile(sizeB, null, null, Tile.Type.EMPTY, timeWait);
    }
}