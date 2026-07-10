# IBM Quantum 中英文术语表

本术语表用于统一 IBM Quantum 课程中文伴读笔记中的专业术语。

## 使用规则

1. 第一次出现时写成“中文（English）”。
2. 后续可以只使用中文，但公式附近可保留英文。
3. 同一个英文术语不得随意更换中文译法。
4. 数学符号、变量名、Qiskit API 和代码不翻译。
5. 对存在多种译法的术语，以下表格中的译法具有最高优先级。
6. 若直译影响数学准确性，应保留英文并增加解释。

---

## 1. 基础数学术语

| English             | 统一中文译法    | 说明                   |
| ------------------- | --------- | -------------------- |
| complex number      | 复数        | 形如 (a+bi)            |
| complex conjugate   | 复共轭       | (a+bi) 的复共轭为 (a-bi)  |
| absolute value      | 绝对值／模     | 对复数优先称“模”            |
| vector              | 向量        | 默认列向量                |
| row vector          | 行向量       |                      |
| column vector       | 列向量       |                      |
| inner product       | 内积        |                      |
| outer product       | 外积        |                      |
| norm                | 范数        |                      |
| Euclidean norm      | 欧几里得范数    |                      |
| matrix              | 矩阵        |                      |
| identity matrix     | 单位矩阵      |                      |
| transpose           | 转置        |                      |
| conjugate transpose | 共轭转置      | 也称 Hermitian adjoint |
| tensor product      | 张量积       | 不翻译成“张量乘法”           |
| Kronecker product   | 克罗内克积     | 矩阵表示中常用              |
| linear map          | 线性映射      |                      |
| linear operator     | 线性算子      |                      |
| eigenvalue          | 特征值       |                      |
| eigenvector         | 特征向量      |                      |
| orthogonal          | 正交        |                      |
| orthonormal         | 标准正交／规范正交 | 优先使用“标准正交”           |
| basis               | 基         | 不翻译成“基础”             |
| standard basis      | 标准基       |                      |
| computational basis | 计算基       |                      |
| dimension           | 维数        |                      |

---

## 2. 经典信息术语

| English                  | 统一中文译法 | 说明              |
| ------------------------ | ------ | --------------- |
| classical state          | 经典状态   |                 |
| classical system         | 经典系统   |                 |
| deterministic state      | 确定性状态  |                 |
| probabilistic state      | 概率状态   |                 |
| probability vector       | 概率向量   | 各分量非负且总和为 1     |
| probability distribution | 概率分布   |                 |
| outcome                  | 结果     | 在测量语境中译为“测量结果”  |
| alphabet                 | 字母表    | 信息论中的有限符号集合     |
| bit                      | 比特     | 经典比特            |
| register                 | 寄存器    | 根据上下文区分经典或量子寄存器 |

---

## 3. 量子状态术语

| English               | 统一中文译法  | 说明                    |
| --------------------- | ------- | --------------------- |
| quantum information   | 量子信息    |                       |
| quantum system        | 量子系统    |                       |
| quantum state         | 量子态     |                       |
| state vector          | 态向量     |                       |
| unit vector           | 单位向量    | 范数为 1                 |
| quantum state vector  | 量子态向量   |                       |
| amplitude             | 振幅      | 首次出现可写“概率振幅”          |
| probability amplitude | 概率振幅    |                       |
| basis state           | 基态      | 注意不要与 ground state 混淆 |
| ground state          | 基态／最低能态 | 在能量语境中优先写“最低能态”       |
| superposition         | 叠加      |                       |
| superposition state   | 叠加态     |                       |
| global phase          | 全局相位    |                       |
| relative phase        | 相对相位    |                       |
| pure state            | 纯态      |                       |
| mixed state           | 混合态     |                       |
| qubit                 | 量子比特    |                       |
| quantum register      | 量子寄存器   |                       |
| Bloch sphere          | 布洛赫球    |                       |

### 术语区分

* `basis state`：表示所选基中的某个向量，例如 (|0\rangle)、(|1\rangle)。
* `ground state`：表示哈密顿量能量最低的状态。
* 两者都可能被译为“基态”，必须根据上下文区分。

---

## 4. 量子演化与矩阵术语

| English                | 统一中文译法      | 说明                      |
| ---------------------- | ----------- | ----------------------- |
| unitary matrix         | 酉矩阵         | 满足 (U^\dagger U=I)      |
| unitary operator       | 酉算子         |                         |
| unitary transformation | 酉变换         |                         |
| Hermitian matrix       | 厄米矩阵        | 也称自伴矩阵                  |
| Hermitian operator     | 厄米算子        |                         |
| self-adjoint operator  | 自伴算子        | 与 Hermitian operator 对应 |
| observable             | 可观测量        | 通常由厄米算子表示               |
| evolution              | 演化          |                         |
| reversible             | 可逆的         |                         |
| quantum operation      | 量子操作        |                         |
| identity operation     | 恒等操作        |                         |
| Pauli matrix           | 泡利矩阵        |                         |
| Pauli operator         | 泡利算子        |                         |
| Hadamard operation     | Hadamard 操作 | 中文正文可写“阿达马操作”           |
| controlled operation   | 受控操作        |                         |
| controlled-NOT         | 受控非门        | 常写作 CNOT                |
| phase gate             | 相位门         |                         |
| rotation gate          | 旋转门         |                         |

---

## 5. 测量术语

| English                    | 统一中文译法    | 说明                     |
| -------------------------- | --------- | ---------------------- |
| measurement                | 测量        |                        |
| quantum measurement        | 量子测量      |                        |
| standard basis measurement | 标准基测量     |                        |
| measurement outcome        | 测量结果      |                        |
| measurement probability    | 测量概率      |                        |
| post-measurement state     | 测量后状态     |                        |
| collapse                   | 坍缩        | 作为直观描述，不替代严格测量规则       |
| expectation value          | 期望值       |                        |
| expected value             | 期望值       |                        |
| observable                 | 可观测量      |                        |
| projective measurement     | 投影测量      |                        |
| projector                  | 投影算子      |                        |
| shot                       | 单次采样／实验次数 | 在 Qiskit 参数中保留 `shots` |
| sampling                   | 采样        |                        |
| count                      | 计数        | Qiskit 输出语境            |

---

## 6. 多系统与纠缠术语

| English                   | 统一中文译法 | 说明           |
| ------------------------- | ------ | ------------ |
| multiple systems          | 多系统    |              |
| composite system          | 复合系统   |              |
| joint state               | 联合状态   |              |
| product state             | 乘积态    | 可以写成子系统态的张量积 |
| separable state           | 可分态    |              |
| entangled state           | 纠缠态    |              |
| entanglement              | 纠缠     |              |
| correlation               | 相关性    |              |
| classical correlation     | 经典相关性  |              |
| quantum correlation       | 量子相关性  |              |
| Bell state                | Bell 态 | 保留人名英文       |
| EPR pair                  | EPR 对  |              |
| maximally entangled state | 最大纠缠态  |              |
| reduced state             | 约化状态   |              |
| subsystem                 | 子系统    |              |
| partial trace             | 偏迹     |              |

---

## 7. 量子电路术语

| English                 | 统一中文译法  | 说明                 |
| ----------------------- | ------- | ------------------ |
| quantum circuit         | 量子电路    |                    |
| quantum gate            | 量子门     |                    |
| wire                    | 线路      | 电路图中的量子比特线         |
| circuit diagram         | 电路图     |                    |
| input state             | 输入态     |                    |
| output state            | 输出态     |                    |
| control qubit           | 控制量子比特  |                    |
| target qubit            | 目标量子比特  |                    |
| circuit depth           | 电路深度    |                    |
| gate count              | 量子门数量   |                    |
| ancilla qubit           | 辅助量子比特  |                    |
| classical register      | 经典寄存器   |                    |
| simulator               | 模拟器     |                    |
| quantum processor       | 量子处理器   |                    |
| quantum processing unit | 量子处理单元  | 简写 QPU             |
| transpilation           | 转译／电路转译 | Qiskit 语境优先写“电路转译” |
| backend                 | 后端      | 保留 Qiskit 技术含义     |

---

## 8. 量子协议术语

| English                  | 统一中文译法   | 说明         |
| ------------------------ | -------- | ---------- |
| quantum teleportation    | 量子隐形传态   | 也可简称“量子传态” |
| superdense coding        | 超密编码     |            |
| quantum key distribution | 量子密钥分发   |            |
| no-cloning theorem       | 不可克隆定理   |            |
| Bell inequality          | Bell 不等式 |            |
| CHSH inequality          | CHSH 不等式 |            |
| nonlocal game            | 非局域博弈    |            |
| strategy                 | 策略       |            |
| classical communication  | 经典通信     |            |
| quantum communication    | 量子通信     |            |
| sender                   | 发送方      |            |
| receiver                 | 接收方      |            |

---

## 9. Qiskit 术语与代码规则

以下名称属于程序接口，原则上不翻译：

```python
QuantumCircuit
QuantumRegister
ClassicalRegister
Statevector
Operator
Sampler
Estimator
transpile
measure
draw
compose
tensor
```

正文中可以解释其作用，例如：

* `QuantumCircuit`：Qiskit 中表示量子电路的类。
* `Statevector`：用于表示和计算态向量的类。
* `Sampler`：用于获得电路测量概率分布或采样结果的 primitive。
* `Estimator`：用于计算可观测量期望值的 primitive。
* `transpile`：把抽象电路转换为目标后端能够执行的电路。

禁止把代码写成中文形式，例如：

```python
# 错误示例
量子电路.h(0)

# 正确示例
circuit.h(0)
```

---

## 10. 容易产生歧义的词

### state

根据上下文译为：

* quantum state：量子态；
* classical state：经典状态；
* state vector：态向量；
* post-measurement state：测量后状态。

不得一律翻译成“状态”而不说明对象。

### system

根据上下文译为：

* quantum system：量子系统；
* classical system：经典系统；
* composite system：复合系统；
* subsystem：子系统。

### operation

根据上下文译为：

* quantum operation：量子操作；
* unitary operation：酉操作；
* gate operation：量子门操作。

### outcome

在测量语境中统一翻译为“测量结果”，而不是“输出”。

### map

数学语境中通常翻译为“映射”，不要机械翻译为“地图”。

### preparation

在量子信息语境中翻译为“制备”，例如：

* state preparation：量子态制备。

---

## 11. 待确认术语

学习过程中遇到无法确定的译法时，先放入此处，不得自行随机选择译法。

| English | 候选译法 | 出现位置 | 最终决定 |
| ------- | ---- | ---- | ---- |
|         |      |      |      |

---

## 12. 更新记录

| 日期         | 更新内容                                           |
| ---------- | ---------------------------------------------- |
| 2026-07-10 | 创建初始术语表，覆盖 Basics of Quantum Information 的核心术语 |
