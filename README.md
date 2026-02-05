# DeFi Staking Yield Protocol

This repository implements a robust staking mechanism where users can deposit a mock token to earn governance or reward tokens over time. It is built to demonstrate the core logic used in major yield farming platforms.

## Features
- **Reward Distribution**: Automated reward calculation based on block time or timestamps.
- **Deposit/Withdraw**: Secure handling of user balances and protocol liquidity.
- **Yield Calculation**: Uses a state-based approach to ensure accuracy for multiple concurrent users.
- **Single Directory**: All Solidity and JavaScript files are located in the root for maximum copy-paste efficiency.

## Mathematical Logic
The protocol calculates rewards based on the time elapsed since the last update. The reward per token is derived as:

$$R_{per\_token} = R_{prev} + \frac{r \times \Delta t}{L}$$

Where:
- $R_{prev}$ is the previous accumulated reward per token.
- $r$ is the reward rate per second.
- $\Delta t$ is the time interval since the last update.
- $L$ is the total liquidity (total tokens staked).

## License
MIT
