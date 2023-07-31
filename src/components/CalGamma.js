import React from "react";
import { calculateMean } from "../utils/mean.js";
import { calculateMedian } from "../utils/median.js";
import { calculateMode } from "../utils/mode.js";
import winecollectionList from "../static/wineCollection.json";
import "../assets/style/common.css"

export const CalGamma = () => {

    // Group data by "Alcohol" class
    const groupedData = {};

    winecollectionList.forEach((data) => {

        const alcoholClass = data.Alcohol;

        if (!groupedData[alcoholClass]) {
            groupedData[alcoholClass] = [];
        }

        groupedData[alcoholClass].push(Number(data.Flavanoids));

    });

    // Calculate mean, median, and mode for each class
    const classStats = Object.keys(groupedData).map((alcoholClass) => {

        const gammaData = groupedData[alcoholClass];
        const mean = calculateMean(gammaData);
        const median = calculateMedian(gammaData);
        const mode = calculateMode(gammaData);

        return {
            Alcohol: alcoholClass,
            Mean: mean,
            Median: median,
            Mode: mode,
        };
    });

    // Render table with class-wise statistics
    return (
        <div className="displayTable">
            <table>
                <thead>
                    <tr>
                        <th>Alcohol Class</th>
                        <th>Gamma Mean</th>
                        <th>Gamma Median</th>
                        <th>Gamma Mode</th>
                    </tr>
                </thead>

                <tbody>
                    {classStats.map((newStat) => (
                        <tr key={newStat.Alcohol}>
                            <td>{newStat.Alcohol}</td>
                            <td>{ Number(newStat.Mean).toFixed(3) }</td>
                            <td>{ Number(newStat.Median).toFixed(3) }</td>
                            <td>{ Number(newStat.Mode).toFixed(3) }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default CalGamma;
