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

    // Calculate mean, median, and mode for each data set for gamma calculation
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

    // Render table by gamma data
    return (
        <div className="displayTable">
            <table>

                <thead>
                    <tr>
                        <th>Measure</th>

                        {classStats.map((thClass) => (
                            <th key={thClass.Alcohol}>Class {thClass.Alcohol}</th>
                        ))}

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Gamma Mean</td>

                        {classStats.map((newStat) => (
                            <td key={newStat.Alcohol}>{Number(newStat.Mean).toFixed(3)}</td>
                        ))}

                    </tr>

                    <tr>
                        <td>Gamma Median</td>

                        {classStats.map((newStat) => (
                            <td key={newStat.Alcohol}>{Number(newStat.Median).toFixed(3)}</td>
                        ))}
                    </tr>

                    <tr>
                        <td>Gamma Mode</td>

                        {classStats.map((newStat) => (
                            <td key={newStat.Alcohol}>{Number(newStat.Mode).toFixed(3)}</td>
                        ))}
                    </tr>
                </tbody>

            </table>
        </div>
    );

};

export default CalGamma;
