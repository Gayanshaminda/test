

interface CountryData {
  name: string;
  description: string;
  totalSupply: string;
  governanceVotes: string;
  burnEvents: string;
}

export const countryData: Record<string, CountryData> = {
  usa: {
    name: "America",
    description: "The American pool is allocated a fixed portion of the total token supply, reserved for U.S.-based events, challenges, and rewards.",
    totalSupply: "The American pool is allocated a fixed portion of the total token supply, reserved for U.S.-based events, challenges, and rewards.",
    governanceVotes: "American token holders can participate in voting on gameplay updates, seasonal content, and community-driven decisions specific to the U.S. region.",
    burnEvents: "Regular burn events are hosted after major U.S. tournaments or milestones, reducing supply and increasing scarcity based on performance."
  },
  russia: {
    name: "Russia",
    description: "The Russia pool is allocated a fixed portion of the total token supply, reserved for Russia.-based events, challenges, and rewards.",
    totalSupply: "A designated token supply is set aside for Russian players, used to support competitive modes, rewards, and local economy balancing.",
    governanceVotes: "Russian holders influence region-specific gameplay tweaks and vote on unlocking historical content or exclusive map features.",
    burnEvents: "Tokens spent in high-risk missions or wagered in PvP battles contribute to burn pools, triggering supply reductions tied to player activity."
  },
  india: {
    name: "India",
    description: "The India pool is allocated a fixed portion of the total token supply, reserved for India.-based events, challenges, and rewards.",
    totalSupply: "India’s token share supports festival events, creator incentives, and local tournaments, with a fair distribution focused on growth and access.",
    governanceVotes: "Indian players vote on cultural themes, community events, and game mechanics tailored to the Indian region’s style and traditions.",
    burnEvents: "Special burn events align with seasonal festivals, where tokens used in celebration challenges or lore unlocks are removed from circulation."
  }
};

export default countryData;
