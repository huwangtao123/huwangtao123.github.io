---
sidebar_position: 1
---

[Source](https://docs.aladdin.club/clever 'Permalink to CLever - AladdinDAO')

CLever gives CVX holders a continuous, automated way to harvest bribes and rewards AND allows users to claim their future bribes and rewards today.

CLever Project

## Why use CLever?

- Automate the process of earning yield with CVX: locking, voting, collecting bribes, even re-locking in Convex as needed!

- Claim your future yields today! You can even swap them to CVX and re-deposit them to earn even more yields.

- Your future yield “loan” is non liquidating, low risk, and has certainty in funding costs.

## How does it work?

Users lock their CVX and can immediately claim 50% of their future yields as clevCVX, for zero cost. Users can swap clevCVX for CVX using either the Curve liquidity pool or the clevCVX Furnace. For users that want to create leverage, they may re-deposit their CVX to claim and swap even more, looping as much as they wish to a maximum of ~2X their initial CVX deposit. All CVX locked with CLever will itself be vote-locked with Convex and used to vote for **maximum bribe income**, with all bribes swapped to CVX and claimable as more clevCVX.

![](https://2935593128-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-M_YfO-qiTw04svyvm5V%2Fuploads%2FoQtlHgrzVUOboaYGRztt%2Fimage.png?alt=media&token=aa48c879-08ae-4f5f-a7cd-cc0b63323c82)

## When can I have my locked CVX back

Users are required to leave at least 2x their claimed future yields locked in the system, until such time as those future yields are earned (or until they exit early, see “repay” below).

When a user is ready to withdraw, they simply make an unlock request. Their requested CVX will be withdrawable when it next unlocks from Convex (could be up to 17 weeks) Users who wish to continue earning don’t have to do anything, and their underlying CVX will be re-locked automatically after each unlock.

## What is clevCVX?

clevCVX is a synthetic token minted against real CVX (or vlCVX) in the Clever system, and each clevCVX token is backed by at least one CVX or vlCVX in the system. clevCVX can be redeemed for CVX 1:1 using the Furnace (where there may be a delay, see below) or immediately in the clevCVX/CVX pool on Curve.

## Is this a loan?

Yes, you can think of it that way. Your locked CVX is the collateral, and the yields from it automatically pay down your debt… but CLever loans are special and offer what we think is the best risk/reward profile for borrowing in all DeFi. Our technique of using a synthetic token paired with a real one (i.e. clevCVX with CVX) offers several advantages:

- Synthetic token can’t realistically be worth more than real one, so there is no need for liquidation

- No need to use any oracle price feed to monitor loan health (less attack surface, less risk)

- Borrowers do not have to take on risk other collateral assets paired with the same borrowed token, like a stablecoin borrowing system would

- Funding cost is fixed and doesn’t fluctuate with liquidity adding/removal/utilization like all other systems do

## Can I repay my claimed future yields early?

Yes, claimed future yields may be repaid any time directly in clevCVX or CVX (1:1) but any early repayment of claimed future yields is subject to a repayment fee (see fees below).

## Are you trying to trick me into giving you my CVX? Or using my CVX to vote for your thing?

No! Users retain ownership of their locked CVX, and votes are cast to maximize bribe value (initially by delegating to Votium). All yields are harvested on users’ behalf, then swapped into CVX, and those CVX are distributed as claimable clevCVX backed by CVX in the Furnace (see below for details)

## What’s the deal with the Furnace?

The furnace helps to keep the value of clevCVX very close to CVX. Each time new CVX enters the system from a bribe/reward harvest (or a direct CVX repayment), clevCVX is minted 1:1 against this income. The CVX is placed in the Furnace while the clevCVX is claimable by the users that earned it.

Any user may request to burn clevCVX from their wallet in exchange for the CVX in the Furnace. If there is not sufficient CVX in the Furnace for all claimants, CVX entering the Furnace will be distributed proportionally between all users with active requests.

## Is it safe?

CLever is built by the experienced and security-obsessed AladdinDAO team and is audited by SECBIT Labs. The audit is [here](https://github.com/AladdinDAO/aladdin-v3-contracts/blob/main/audit-reports/SECBIT_CLever_Report_v1.1.pdf). This is the Aladdin way.

## How much does it cost?

During the beta phase (prior to launch of Curve liquidity in clevCVX/CVX), CLever will charge 2% of yields harvested, which will cover the gas required for harvest transactions.

Once clevCVX liquidity is launched and the product is fully operational, CLever will charge 20% of yields, which will be split 50/50 between clevCVX/CVX liquidity pool and a yet-to-be-announced revenue sharing program.

Early repayment of claimed future yields are subject to a 5% repayment fee.

**CLever Github?**

[CLever Github](https://github.com/AladdinDAO/aladdin-v3-contracts/tree/main/contracts/clever)

**Deployed Contracts?**

[Contracts Github](https://github.com/AladdinDAO/deployments#clever)

**CLever **Governance Multisig

CLever Treasury: [0xFC08757c505eA28709dF66E54870fB6dE09f0C5E](https://etherscan.io/address/0xFC08757c505eA28709dF66E54870fB6dE09f0C5E)
