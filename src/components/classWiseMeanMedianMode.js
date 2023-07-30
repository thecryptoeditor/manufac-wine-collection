import React from "react";
import { calculateMean } from "../utils/mean.js";
import { calculateMedian } from "../utils/median.js";
import { calculateMode } from "../utils/mode.js";
import winecollectionList from "../static/wineCollection.json";

const ClassWiseStatsComponent = () => {

    // Group data by "Alcohol" class
    const groupedData = {};

    winecollectionList.forEach((data) => {

        const alcoholClass = data.Alcohol;

        if (!groupedData[alcoholClass]) {
            groupedData[alcoholClass] = [];
        }

        groupedData[alcoholClass].push(data.Flavanoids);

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
                        <th>Alcohol Class</th>
                        <th>Mean</th>
                        <th>Median</th>
                        <th>Mode</th>
                    </tr>
                </thead>

                <tbody>
                    {classStats.map((stat) => (
                        <tr key={stat.Alcohol}>
                            <td>{stat.Alcohol}</td>
                            <td>{stat.Mean}</td>
                            <td>{stat.Median}</td>
                            <td>{stat.Mode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default ClassWiseStatsComponent;
