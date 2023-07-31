import React from "react";
import { calculateMean } from "../utils/mean.js";
import { calculateMedian } from "../utils/median.js";
import { calculateMode } from "../utils/mode.js";
import winecollectionList from "../static/wineCollection.json";
import "../assets/style/common.css"

const ClassWiseStatsComponent = () => {

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

        const flavanoidsData = groupedData[alcoholClass];
        const mean = calculateMean(flavanoidsData);
        const median = calculateMedian(flavanoidsData);
        const mode = calculateMode(flavanoidsData);

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
                        <th>Measure</th>

                        {classStats.map((abc) => (
                            <th key={abc.Alcohol}>Class {abc.Alcohol}</th>
                        ))}

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Flavanoids Mean</td>

                        {classStats.map((newStat) => (
                            <td key={newStat.Alcohol}>{Number(newStat.Mean).toFixed(3)}</td>
                        ))}

                    </tr>

                    <tr>
                        <td>Flavanoids Median</td>

                        {classStats.map((newStat) => (
                            <td key={newStat.Alcohol}>{Number(newStat.Median).toFixed(3)}</td>
                        ))}
                    </tr>

                    <tr>
                        <td>Flavanoids Mode</td>

                        {classStats.map((newStat) => (
                            <td key={newStat.Alcohol}>{Number(newStat.Mode).toFixed(3)}</td>
                        ))}
                    </tr>
                </tbody>

            </table>
        </div>
    );

};

export default ClassWiseStatsComponent;
