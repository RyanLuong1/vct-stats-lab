import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';
import Image from "next/image";
import { AGENT_PATH } from "@/constants";
import { CustomAxisTickProps, Agent } from "@/types";

function getAgentImagePath(agentName: string): string {
    return AGENT_PATH[agentName as keyof typeof AGENT_PATH];
  }

const example_data: Agent[] = [
    {
        img: getAgentImagePath("omen"),
        usage: 100
        // agents: [
        //     {name: "omen", img: getAgentImagePath("omen"), usage: 300},
        //     {name: "clove", img: getAgentImagePath("clove"), usage: 300},
        // ]
    },
    {
        img: getAgentImagePath("clove"),
        usage: 200
    }
    // {
    //     player: "Derrek",
    //     agents: [
    //         {name: "gekko", img: getAgentImagePath("viper"), usage: 300},
    //         {name: "fade", img: getAgentImagePath("fade"), usage: 300},
    //         {name: "sova", img: getAgentImagePath("sova"), usage: 300}
    //     ]
    // }
]

const customTicks = () => {
    return(
        <>
        </>
    )
}


const renderCustomAxisTick = ({ x, y, payload }: CustomAxisTickProps) => {
    console.log(payload.value)
    return (
        <g transform={`translate(${x},${y})`}>
          <image href={payload.value} x={-20} y={0} height={40} width={40} />
          {/* <text x={0} y={50} textAnchor="middle" fill="#666">{payload.value}</text> */}
        </g>
    )
}
  
//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       const agentData = data.find(d => d.agent === payload[0].payload.agent);
//       return (
//         <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
//           <p>{`Agent: ${agentData.agent}`}</p>
//           <p>{`Usage: ${agentData.usage}`}</p>
//         </div>
//       );
//     }
  
//     return null;
//   };
  
  const BarGraphWithImages = () => {
    // const agentsData = example_data.flatMap(player =>
    //     player.agents.map(agent => ({
    //       ...agent,
    //       player: player.player,
    //     }))
    //   );
    // console.log(agentsData)
    return (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={example_data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="img" tick={renderCustomAxisTick} />
          <YAxis />
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Bar dataKey="usage" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  
  export default BarGraphWithImages;