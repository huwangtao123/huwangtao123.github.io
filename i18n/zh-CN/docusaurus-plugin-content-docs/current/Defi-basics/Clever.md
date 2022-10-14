[Source](https://docs.aladdin.club/clever 'Permalink to CLever - AladdinDAO')

CLever 为 CVX 持有者提供了一种持续的、自动化的方式来收获贿赂和奖励，并允许用户今天就索取他们未来的贿赂和奖励。

CLever 项目

## 为什么使用 CLever？

- 用 CVX 赚取收益的过程自动化：锁定、投票、收集贿赂，甚至在需要时在 Convex 中重新锁定!

- 今天就领走你的未来收益率! 你甚至可以把它们换成 CVX，然后重新存入，赚取更多的收益率。

- 你的未来收益率 "贷款 "是非清偿性的，低风险的，并且有确定的资金成本。

## 它是如何运作的？

用户锁定他们的 CVX，并可以立即以 clevCVX 的形式索取 50%的未来收益率，而且是零成本。用户可以使用 Curve 流动性池或 clevCVX 炉将 clevCVX 交换为 CVX。对于想要创造杠杆的用户来说，他们可以重新存入他们的 CVX，以索取和交换更多的 CVX，循环次数最多为其初始 CVX 存款的~2 倍。所有被 CLever 锁定的 CVX 本身将被 Convex 投票锁定，并用于投票选出**最大的贿赂收入**，所有的贿赂将被交换为 CVX，并可作为更多的 clevCVX 被认领。

![](https://2935593128-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-M_YfO-qiTw04svyvm5V%2Fuploads%2FoQtlHgrzVUOboaYGRztt%2Fimage.png?alt=media&token=aa48c879-08a-4f5f-a7cd-cc0b63323c82)

## 我什么时候可以拿回我被锁定的 CVX

用户需要将至少 2 倍的声称的未来收益率锁定在系统中，直到这些未来收益率被赚取（或直到他们提前退出，见下文 "偿还"）。

当用户准备退出时，他们只需提出解锁请求。他们请求的 CVX 将在下次从 Convex 解锁时可以提取（可能长达 17 周）。希望继续赚钱的用户不需要做任何事情，他们的基础 CVX 将在每次解锁后自动重新锁定。

## 什么是 clevCVX？

clevCVX 是针对 Clever 系统中的真实 CVX（或 vlCVX）铸造的合成代币，每个 clevCVX 代币都由系统中至少一个 CVX 或 vlCVX 支持。clevCVX 可以使用熔炉（可能会有延迟，见下文）或立即在 Curve 上的 clevCVX/CVX 池中兑换成 CVX。

## 这是一笔贷款吗？

是的，你可以这样想。你锁定的 CVX 是抵押品，它的收益会自动偿还你的债务......但 CLever 贷款很特别，提供我们认为是所有 DeFi 中最好的风险/回报的借款。我们使用合成代币与真实代币配对的技术（即 clevCVX 与 CVX）提供了几个优势。

- 合成代币在现实中不可能比真实代币更有价值，所以不需要进行清算

- 不需要使用任何 oracle 价格反馈来监测贷款的健康状况（攻击面较小，风险较小）

- 借款人不需要像稳定币的借款系统那样，承担与同一借款代币配对的其他抵押资产的风险

- 资金成本是固定的，不会像所有其他系统那样随着流动性的增加/移除/使用而波动

## ＃＃我可以提前偿还我声称的未来收益率吗？

是的，声称的未来收益率可以在任何时候直接以 clevCVX 或 CVX（1:1）偿还，但任何提前偿还声称的未来收益率都需要支付偿还费用（见下文费用）。

## 你是想骗我把我的 CVX 给你吗？或者用我的 CVX 来为你的东西投票？

不是！用户保留对其锁定的 CVX 的所有权，投票是为了使贿赂价值最大化（最初是通过委托 Votium）。所有的收益都是以用户的名义收获的，然后换成 CVX，这些 CVX 作为可索取的 clevCVX 分发，由炉子里的 CVX 支持（详见下文）。

## 炉子是怎么回事？

熔炉有助于保持 clevCVX 的价值与 CVX 非常接近。每次新的 CVX 从贿赂/奖励的收获（或直接的 CVX 偿还）中进入系统，clevCVX 就会以 1:1 的比例被铸造出来，与这些收入相对应。CVX 被放置在熔炉中，而 clevCVX 可以被获得它的用户索取。

任何用户都可以要求从他们的钱包中烧掉 clevCVX 以换取熔炉中的 CVX。如果熔炉中没有足够的 CVX 供所有申请者使用，进入熔炉的 CVX 将按比例分配给所有有活动申请的用户。

## 它是安全的吗？

CLever 是由经验丰富、注重安全的 AladdinDAO 团队建立的，并由 SECBIT 实验室进行审计。审计结果是[这里]（https://github.com/AladdinDAO/aladdin-v3-contracts/blob/main/audit-reports/SECBIT_CLever_Report_v1.1.pdf）。这就是阿拉丁的方式。

## 它的成本是多少？

在测试阶段（在 clevCVX/CVX 中推出 Curve 流动性之前），CLever 将收取所收获收益率的 2%，这将涵盖收获交易所需的气体。

一旦 clevCVX 流动性推出，产品全面运作，CLever 将收取 20%的收益率，这些收益率将在 clevCVX/CVX 流动性池和一个尚未公布的收入分享计划中各占一半。

提前偿还声称的未来收益率需要支付 5%的偿还费用。

通过www.DeepL.com/Translator（免费版）翻译

**CLever Github?**

[CLever Github](https://github.com/AladdinDAO/aladdin-v3-contracts/tree/main/contracts/clever)

**Deployed Contracts?**

[Contracts Github](https://github.com/AladdinDAO/deployments#clever)

**CLever **Governance Multisig

CLever Treasury: [0xFC08757c505eA28709dF66E54870fB6dE09f0C5E](https://etherscan.io/address/0xFC08757c505eA28709dF66E54870fB6dE09f0C5E)
