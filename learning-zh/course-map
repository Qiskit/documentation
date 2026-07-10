# Basics of Quantum Information 课程知识地图

## 1. 课程信息

- 课程名称：Basics of Quantum Information
- 作者：John Watrous
- 原始源码目录：`learning/courses/basics-of-quantum-information/`
- 中文学习资料目录：`learning-zh/`
- 当前学习目标：通过数学推导、Qiskit 实现和配套习题重新巩固课程内容。

---

## 2. 课程整体逻辑

课程主线为：

$$
\text{单个系统}
\rightarrow
\text{多个系统}
\rightarrow
\text{量子电路}
\rightarrow
\text{纠缠协议}
$$

### 第一单元：Single systems

研究单个经典系统和单个量子系统如何表示、演化和测量。

主要数学对象包括：

$$
\text{概率向量},\quad
\text{复向量},\quad
\text{酉矩阵},\quad
\text{测量概率}
$$

### 第二单元：Multiple systems

研究多个系统组合后，联合状态如何表示。

复合系统的状态空间为：

$$
\mathcal{H}_{AB}
=
\mathcal{H}_A\otimes\mathcal{H}_B
$$

### 第三单元：Quantum circuits

研究如何使用有限个量子门组织量子信息处理过程，包括受控操作、投影以及量子信息的基本限制。

### 第四单元：Entanglement in action

研究纠缠如何转化为实际的信息处理能力，包括量子隐形传态、超密编码和 CHSH 游戏。

---

## 3. 官方课程目录

### Unit 1：Single systems

原始目录：

```text
learning/courses/basics-of-quantum-information/single-systems/
```

#### 1.1 Introduction

原始文件：

```text
single-systems/introduction.mdx
```

主要作用：

- 介绍本单元的研究对象；
- 建立“状态—操作—测量”的基本分析框架；
- 说明经典信息和量子信息将采用相互对应的方式讲解。

学习状态：下一步处理

#### 1.2 Classical information

原始文件：

```text
single-systems/classical-information.mdx
```

概率向量满足：

$$
p=
\begin{pmatrix}
p_1\\
\vdots\\
p_n
\end{pmatrix},
\qquad
p_i\geq 0,
\qquad
\sum_i p_i=1
$$

学习状态：未重新整理

#### 1.3 Quantum information

原始文件：

```text
single-systems/quantum-information.mdx
```

量子态的一般形式为：

$$
|\psi\rangle
=
\sum_{a\in\Sigma}\alpha_a|a\rangle,
\qquad
\sum_{a\in\Sigma}|\alpha_a|^2=1
$$

在计算基中测量得到结果 $a$ 的概率为：

$$
P(a)=|\alpha_a|^2
$$

学习状态：未重新整理

#### 1.4 Qiskit implementation

主要内容：

- 使用 Qiskit 表示量子态；
- 使用矩阵表示量子操作；
- 构造单量子比特电路；
- 查看态向量和测量结果。

学习状态：未重新整理

---

### Unit 2：Multiple systems

原始目录：

```text
learning/courses/basics-of-quantum-information/multiple-systems/
```

#### 2.1 Introduction

从单系统推广到复合系统，并解释为什么需要张量积。

#### 2.2 Classical information

研究联合概率分布、独立性、相关性和边缘概率。

#### 2.3 Quantum information

复合状态空间为：

$$
\mathcal{H}_{AB}
=
\mathcal{H}_A\otimes\mathcal{H}_B
$$

乘积态具有形式：

$$
|\psi\rangle_{AB}
=
|\phi\rangle_A\otimes|\chi\rangle_B
$$

不能写成上述形式的两系统纯态称为纠缠态。

#### 2.4 Qiskit implementation

典型 Bell 态为：

$$
|\Phi^+\rangle
=
\frac{|00\rangle+|11\rangle}{\sqrt{2}}
$$

学习状态：未重新整理

---

### Unit 3：Quantum circuits

原始目录：

```text
learning/courses/basics-of-quantum-information/quantum-circuits/
```

#### 3.1 Introduction

从单个量子操作转向完整的量子电路模型。

#### 3.2 Circuits

研究量子门的串行组合、并行组合、受控操作和电路等价关系。

#### 3.3 Inner products and projections

内积写作：

$$
\langle\phi|\psi\rangle
$$

由单位向量 $|\phi\rangle$ 定义的一维投影算子为：

$$
P=|\phi\rangle\langle\phi|
$$

#### 3.4 Limitations on quantum information

不可克隆定理说明，不存在一个固定酉操作 $U$，使它对任意未知态都满足：

$$
U\left(|\psi\rangle|0\rangle\right)
=
|\psi\rangle|\psi\rangle
$$

学习状态：未重新整理

---

### Unit 4：Entanglement in action

原始目录：

```text
learning/courses/basics-of-quantum-information/entanglement-in-action/
```

#### 4.1 Introduction

说明纠缠可以被视为一种信息处理资源。

#### 4.2 Quantum teleportation

资源关系为：

$$
1\text{ 个共享 Bell 对}
+
2\text{ 个经典比特}
\Longrightarrow
1\text{ 个量子态传输}
$$

#### 4.3 Superdense coding

资源关系为：

$$
1\text{ 个共享 Bell 对}
+
1\text{ 个量子比特传输}
\Longrightarrow
2\text{ 个经典比特}
$$

#### 4.4 CHSH game

经典策略的最大成功概率为：

$$
P_{\mathrm{classical}}\leq\frac{3}{4}
$$

理想量子策略的成功概率为：

$$
P_{\mathrm{quantum}}
=
\cos^2\left(\frac{\pi}{8}\right)
\approx 0.8536
$$

#### 4.5 Qiskit implementation

使用 Qiskit 实现传态、超密编码和 CHSH 实验。

学习状态：未重新整理

---

## 4. 结课考试

原始文件：

```text
learning/courses/basics-of-quantum-information/exam.mdx
```

建议在完成以下任务后参加：

1. 全部理论小节重新整理；
2. 完成每节自测题；
3. 完成四次单元测试；
4. 独立实现 Bell 态、传态和 CHSH 电路；
5. 完成一次综合模拟考试。

---

## 5. 推荐重新学习顺序

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

每个小节采用以下处理流程：

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

## 6. 当前进度

| 单元                   | 小节数量 | 已整理 | 当前状态   |
| ---------------------- | -------: | -----: | ---------- |
| Single systems         |        4 |      0 | 下一步开始 |
| Multiple systems       |        4 |      0 | 未开始     |
| Quantum circuits       |        4 |      0 | 未开始     |
| Entanglement in action |        5 |      0 | 未开始     |
| 合计                   |       17 |      0 | 复习阶段   |

---



## 7. 下一步

首先处理：

```text
learning/courses/basics-of-quantum-information/single-systems/introduction.mdx
```

对应中文笔记保存为：

```text
learning-zh/notes/01-single-systems/01-introduction.md
```
