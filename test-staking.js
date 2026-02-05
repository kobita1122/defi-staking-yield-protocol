/**
 * Basic testing script to simulate staking and reward accrual.
 */

async function simulateStaking() {
    console.log("Initializing Staking Protocol Simulation...");
    
    // Logic to simulate block mining and reward calculation
    const initialRewardPerToken = 0;
    const rate = 100;
    const timeElapsed = 60; // 60 seconds
    const totalStaked = 5000;

    const currentReward = initialRewardPerToken + (rate * timeElapsed) / totalStaked;
    
    console.log(`Simulated Reward Per Token after 60s: ${currentReward}`);
}

simulateStaking();
