# Basics of Quantum Information 课程知识地图

## 1. 课程信息

- **课程名称**：Basics of Quantum Information
- **作者**：John Watrous
- **原始源码目录**：

```text
learning/courses/basics-of-quantum-information/
```

- **中文学习资料目录**：

```text
learning-zh/
```

- **当前学习目标**：通过中文伴读、数学推导、Qiskit 实现和配套习题，重新巩固课程内容。

---

## 2. 课程整体逻辑

本课程的知识主线是：

```math
\text{单个系统}
\rightarrow
\text{多个系统}
\rightarrow
\text{量子电路}
\rightarrow
\text{纠缠协议}
```

四个单元不是彼此独立的，而是逐层建立量子信息的数学框架。

### 2.1 Single systems

研究单个经典系统和单个量子系统如何表示、演化和测量。

核心问题是：

> 一个信息系统的状态，应当使用什么数学对象表示？

主要数学对象包括：

```math
\text{概率向量},\quad
\text{复向量},\quad
\text{酉矩阵},\quad
\text{测量概率}
```

### 2.2 Multiple systems

研究多个系统组合后，联合状态如何表示。

核心问题是：

> 如果系统 $A$ 和系统 $B$ 组成一个复合系统，联合状态空间应当是什么？

复合量子系统的状态空间为：

```math
\mathcal{H}_{AB}
=
\mathcal{H}_A\otimes\mathcal{H}_B
```

### 2.3 Quantum circuits

研究如何使用有限个量子门描述量子信息处理过程。

核心问题是：

> 如何把若干量子操作组织成一个完整的计算过程？

主要内容包括：

- 量子电路；
- 串行与并行组合；
- 受控操作；
- 内积与投影；
- 量子信息的基本限制。

### 2.4 Entanglement in action

研究纠缠如何转化为实际的信息处理能力。

核心问题是：

> 纠缠能够帮助我们完成哪些经典系统无法直接完成的任务？

主要协议包括：

- 量子隐形传态；
- 超密编码；
- CHSH 游戏。

---

## 3. 官方课程目录

官方课程共包含四个单元、十七个小节和一个结课考试。

---

# Unit 1：Single systems

原始目录：

```text
learning/courses/basics-of-quantum-information/single-systems/
```

## 1.1 Introduction

原始文件：

```text
single-systems/introduction.mdx
```

### 本节作用

- 介绍课程采用的基本分析框架；
- 建立“状态—操作—测量”的结构；
- 说明经典信息与量子信息将采用对应方式讲解。

### 核心问题

1. 什么是信息系统？
2. 如何描述系统当前所处的状态？
3. 系统如何发生变化？
4. 如何从系统中读取信息？

### 学习状态

未重新整理。

---

## 1.2 Classical information

原始文件：

```text
single-systems/classical-information.mdx
```

### 主要内容

- 经典状态；
- 确定性状态；
- 概率状态；
- 概率向量；
- 经典操作；
- 经典系统的测量。

一个有限经典系统的概率状态可以写为：

```math
p=
\begin{pmatrix}
p_1\\
\vdots\\
p_n
\end{pmatrix}
```

其中必须满足：

```math
p_i\geq 0,
\qquad
\sum_i p_i=1
```

### 核心理解

经典概率状态中的每个分量都直接表示一个概率，因此必须是非负实数，并且总和等于 $1$。

### 学习状态

未重新整理。

---

## 1.3 Quantum information

原始文件：

```text
single-systems/quantum-information.mdx
```

### 主要内容

- 量子态；
- 复向量；
- 概率振幅；
- 单位范数；
- 酉演化；
- 标准基测量；
- 全局相位与相对相位。

量子态的一般形式为：

```math
|\psi\rangle
=
\sum_{a\in\Sigma}\alpha_a|a\rangle
```

归一化条件为：

```math
\sum_{a\in\Sigma}|\alpha_a|^2=1
```

在计算基中测量得到结果 $a$ 的概率为：

```math
P(a)=|\alpha_a|^2
```

封闭量子系统的演化由酉矩阵描述：

```math
|\psi'\rangle
=
U|\psi\rangle
```

其中：

```math
U^\dagger U=I
```

### 核心理解

概率振幅本身不是概率；只有振幅模平方才是测量概率。振幅可以是负数或复数，因此不同演化路径之间可以发生干涉。

### 学习状态

未重新整理。

---

## 1.4 Qiskit implementation

原始文件通常为：

```text
single-systems/qiskit-implementation.ipynb
```

### 主要内容

- 使用 Qiskit 表示量子态；
- 使用矩阵表示量子操作；
- 构造单量子比特电路；
- 查看态向量；
- 进行测量和采样。

### 实践目标

1. 构造 $|0\rangle$ 和 $|1\rangle$；
2. 应用 $X$、$H$、$Z$ 等量子门；
3. 使用 `Statevector` 查看精确状态；
4. 比较精确概率与有限 `shots` 采样结果。

### 学习状态

未重新整理。

---

# Unit 2：Multiple systems

原始目录：

```text
learning/courses/basics-of-quantum-information/multiple-systems/
```

## 2.1 Introduction

### 本节作用

- 从单系统推广到多个系统；
- 引入复合系统；
- 说明为什么需要联合状态空间。

### 核心问题

> 已知两个系统各自的状态空间，怎样构造它们组合后的状态空间？

### 学习状态

未重新整理。

---

## 2.2 Classical information

### 主要内容

- 联合概率分布；
- 独立状态；
- 相关状态；
- 边缘概率；
- 条件概率。

如果两个经典系统相互独立，则联合概率可以分解为：

```math
P(A=a,B=b)
=
P(A=a)P(B=b)
```

如果不能这样分解，则两个系统之间存在统计相关性。

### 学习状态

未重新整理。

---

## 2.3 Quantum information

### 主要内容

- 张量积；
- 复合量子系统；
- 乘积态；
- 纠缠态；
- 局部操作；
- 多系统测量。

复合状态空间为：

```math
\mathcal{H}_{AB}
=
\mathcal{H}_A\otimes\mathcal{H}_B
```

乘积态具有形式：

```math
|\psi\rangle_{AB}
=
|\phi\rangle_A\otimes|\chi\rangle_B
```

不能写成上述形式的两系统纯态称为纠缠态。

### 两量子比特例子

一般两量子比特纯态写为：

```math
|\psi\rangle
=
a|00\rangle
+
b|01\rangle
+
c|10\rangle
+
d|11\rangle
```

它是乘积态当且仅当：

```math
ad-bc=0
```

若：

```math
ad-bc\neq 0
```

则该状态是纠缠态。

### 学习状态

未重新整理。

---

## 2.4 Qiskit implementation

### 主要内容

- 构造多量子比特寄存器；
- 表示张量积状态；
- 使用 CNOT 门；
- 构造 Bell 态；
- 进行多量子比特测量。

典型 Bell 态为：

```math
|\Phi^+\rangle
=
\frac{|00\rangle+|11\rangle}{\sqrt{2}}
```

其制备过程为：

```math
|00\rangle
\xrightarrow{H\otimes I}
\frac{|00\rangle+|10\rangle}{\sqrt{2}}
\xrightarrow{\mathrm{CNOT}}
\frac{|00\rangle+|11\rangle}{\sqrt{2}}
```

### 学习状态

未重新整理。

---

# Unit 3：Quantum circuits

原始目录：

```text
learning/courses/basics-of-quantum-information/quantum-circuits/
```

## 3.1 Introduction

### 本节作用

- 从单个量子操作转向完整量子电路；
- 建立量子计算的线路模型；
- 为后续协议分析提供统一表示。

### 学习状态

未重新整理。

---

## 3.2 Circuits

### 主要内容

- 量子线路；
- 量子门顺序；
- 串行组合；
- 并行组合；
- 受控操作；
- 电路等价关系。

两个操作先后执行时，总操作为矩阵乘积：

```math
|\psi_{\mathrm{out}}\rangle
=
U_2U_1|\psi_{\mathrm{in}}\rangle
```

注意最右侧的 $U_1$ 最先作用。

### 学习状态

未重新整理。

---

## 3.3 Inner products and projections

### 主要内容

- 内积；
- 正交；
- 标准正交基；
- 投影；
- 投影测量；
- 状态可区分性。

两个状态的内积写为：

```math
\langle\phi|\psi\rangle
```

由单位向量 $|\phi\rangle$ 定义的一维投影算子为：

```math
P
=
|\phi\rangle\langle\phi|
```

它满足：

```math
P^2=P,
\qquad
P^\dagger=P
```

### 核心理解

两个纯态只有在彼此正交时，才能通过一次测量被完全区分。

### 学习状态

未重新整理。

---

## 3.4 Limitations on quantum information

### 主要内容

- 不可克隆定理；
- 非正交态不可完美区分；
- 测量扰动；
- 量子信息处理中不可实现的任务。

不可克隆定理说明，不存在一个固定酉操作 $U$，使得对任意未知态 $|\psi\rangle$ 都有：

```math
U\left(|\psi\rangle|0\rangle\right)
=
|\psi\rangle|\psi\rangle
```

### 核心理解

不可克隆并不是因为技术设备不够好，而是由量子态空间的线性结构决定的。

### 学习状态

未重新整理。

---

# Unit 4：Entanglement in action

原始目录：

```text
learning/courses/basics-of-quantum-information/entanglement-in-action/
```

## 4.1 Introduction

### 本节作用

- 从纠缠的数学定义转向具体协议；
- 说明纠缠是一种可以被消耗和利用的信息资源。

### 学习状态

未重新整理。

---

## 4.2 Quantum teleportation

### 主要内容

- 共享 Bell 对；
- Alice 的联合操作；
- 两个经典比特；
- Bob 的条件修正；
- 未知量子态的传递。

资源关系为：

```math
1\text{ 个共享 Bell 对}
+
2\text{ 个经典比特}
\Longrightarrow
1\text{ 个量子态传输}
```

未知态写为：

```math
|\psi\rangle
=
\alpha|0\rangle+\beta|1\rangle
```

Bob 根据 Alice 发送的两个经典比特，选择应用：

```math
I,\quad X,\quad Z,\quad XZ
```

从而恢复原始量子态。

### 学习状态

未重新整理。

---

## 4.3 Superdense coding

### 主要内容

- 共享 Bell 对；
- Alice 的局部 Pauli 操作；
- 一个量子比特的发送；
- Bob 的 Bell 基测量。

资源关系为：

```math
1\text{ 个共享 Bell 对}
+
1\text{ 个量子比特传输}
\Longrightarrow
2\text{ 个经典比特}
```

Alice 通过选择：

```math
I,\quad X,\quad Z,\quad XZ
```

把共享 Bell 态变换为四个彼此正交的 Bell 态，从而编码两位经典信息。

### 学习状态

未重新整理。

---

## 4.4 CHSH game

### 主要内容

- 非局域博弈；
- 经典策略；
- 纠缠策略；
- Bell 不等式；
- 经典相关性与量子相关性的区别。

经典策略的最大成功概率为：

```math
P_{\mathrm{classical}}
\leq
\frac{3}{4}
```

理想量子策略的成功概率为：

```math
P_{\mathrm{quantum}}
=
\cos^2\left(\frac{\pi}{8}\right)
\approx
0.8536
```

量子策略不能实现任意强的相关性，其上限由 Tsirelson bound 限制。

### 学习状态

未重新整理。

---

## 4.5 Qiskit implementation

### 主要内容

- 用 Qiskit 实现量子隐形传态；
- 用 Qiskit 实现超密编码；
- 构造 CHSH 实验；
- 统计测量结果；
- 比较理想模拟器、带噪模拟器和真实设备。

### 学习状态

未重新整理。

---

# 4. 结课考试

原始文件：

```text
learning/courses/basics-of-quantum-information/exam.mdx
```

建议在以下任务完成后参加：

1. 全部理论小节重新整理；
2. 完成每节自测题；
3. 完成四次单元测试；
4. 独立实现 Bell 态、量子隐形传态和 CHSH 电路；
5. 完成一次综合模拟考试。

---

# 5. 推荐重新学习顺序

严格按照官方顺序进行：

```text
Single systems
    ↓
Multiple systems
    ↓
Quantum circuits
    ↓
Entanglement in action
    ↓
综合复习
    ↓
Exam
```

每个单元内部采用：

```text
Introduction
    ↓
核心理论
    ↓
数学推导
    ↓
Qiskit implementation
    ↓
练习题
    ↓
单元测试
```

---

# 6. 每个小节的处理流程

```text
读取 glossary.md
    ↓
读取 context.md
    ↓
读取当前英文原文
    ↓
提取本节逻辑
    ↓
生成中文语义解释
    ↓
补充数学推导
    ↓
完成 Qiskit 示例
    ↓
生成练习题
    ↓
更新 context.md
```

---

# 7. 学习完成标准

一个小节只有同时完成以下任务，才算完成：

1. 能够不用原文准确说明核心定义；
2. 能够解释定义中每个条件的必要性；
3. 能够完成至少一道数值计算；
4. 能够指出常见错误结论；
5. 能够实现最小 Qiskit 示例；
6. 能够说出对应英文术语；
7. 完成自测题并核对答案；
8. 更新 `context.md`。

---

# 8. 当前进度

| 单元 | 小节数量 | 已整理 | 当前状态 |
|---|---:|---:|---|
| Single systems | 4 | 0 | 下一步开始 |
| Multiple systems | 4 | 0 | 未开始 |
| Quantum circuits | 4 | 0 | 未开始 |
| Entanglement in action | 5 | 0 | 未开始 |
| 合计 | 17 | 0 | 复习阶段 |

---

# 9. 下一步

首先处理：

```text
learning/courses/basics-of-quantum-information/single-systems/introduction.mdx
```

对应中文笔记保存为：

```text
learning-zh/notes/01-single-systems/01-introduction.md
```

完成后进入：

```text
learning/courses/basics-of-quantum-information/single-systems/classical-information.mdx
```
