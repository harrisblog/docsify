- [x] 看ppt，对应考点笔记
- [x] 看平时实验作业，雨课堂题目
- [ ] ~~看xm老师ppt~~
- [ ] ~~看书对应重点内容~~
- [x] 做肖明老师课后习题
- [x] 二刷知识点
- [x] 二刷题目
- [x] 二刷可能考的编程题
- [ ] 五八九章重点地方搞通
- [x] 三刷知识点
- [x] 三刷编程题

## 考点

### 第一章

1. 进制之间转换（2↔10，2↔16），==一定要有解题过程==
2. 负数的补码，==一定要有解题过程==

### 第二章

1. 编程题中考寄存器
2. 8086，CPU引脚（功能、含义，需要记背）
3. 控制引脚👉ALE、M/IO、WR、RD、BHE/S7

### 第三章

1. 寻址方式（需要指出该指令的寻址方式）

2. 数据传送指令（PPT图片中标红的指令皆为重点）


### 第四章

写完整汇编程序（不会很难，比如求最大最小值，实验作业出现过的题）

> 这类题需留意题干给的是有符号还是无符号，在CMP时选择正确的跳转指令

### 第五章

给一个图，芯片个数计算（第一大题），地址范围，算芯片存储容量，多少根地址线（==结果转16进制==），数据线

#### 零散知识点

随机存储器RAM

只读存储器ROM

#### 芯片个数计算

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530095918496.png)

> 其中，M=2^地址线个数^，8/N=每组芯片个数

#### 线选法

地址中的高位部分不经译码，直接用它们分别作各个芯片的片选信号。

**地址范围**：

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530102820332.png)

> 片外地址是没有用上的A15~19

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530110327029.png)

> 计算第1片6116芯片地址范围时，与CE相连的地址线为<u>0</u>，第2、3、4个以此类推

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530110525888.png)

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530110632336.png)

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530110648978.png)

#### 部分译码法

对高位地址的一部分进行译码产生片选信号，这种方法叫部分译码法。

#### 全译码法

片外全部高位地址作为译码器的输入，进行完全译码，以此产生各个片选信号 。

##### **芯片总存储容量**：

**公式**：2^地址线A个数^ ✖ 芯片个数（也就是上面求芯片个数的M✖N）

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530143254640.png)

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530145715141.png)

> A15~A19使用了，所以选择1。没使用则取任意值，据规定全选0。
>
> 总结，有则1，无则0

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530145742982.png)

#### 奇偶存储体地址范围

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530151205455.png)

> 注意此处上下对应的是 M0

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530151228173.png)

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530151646403.png)

!> 注意此处偶数末尾是0，奇数是1

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/Microcomputer_Note/image-20210530153439156.png)

#### 多少根地址线

通过M倒推地址线根数

> 例题：512×4 b RAM构成16KB的存储系统。
>
> 芯片的数目：（16K/512）*（8/4）=64片
>
> 片内寻址：512=29，需要9根地址线
>
> 故：需要11位（20 - 11）地址作为片外地址译码。

### 第八章

#### I/O方式（程序控制/DMA）

1. 无条件传送

2. 查询方式传送

3. 中断方式传送



#### 查询方式传送👉I/O，（PPT，C8P53）



### 第九章

8253初始化，无条件传送，考方0，方1方2不考

考简单外设连接（开关，LED，数码管显示器）（PPT，C9P20）



### 其他班级同学记录的考点

#### 基础部分

任意给定一个十进制的数，转换成二进制、
给定一个二进制数，转换成十六进制
给定一个有符号数，写出该有符号数的补码
(数的表示，转换，有符号数，无符号数)，重点考补码表示有符号数

#### 8086地址表示方法以及转换

逻辑地址，和，物理地址
逻辑地址和物理地址互相转化

#### 程序状态字，标志寄存器

三个控制标志，不需要管
六大状态标志
进位标志 cf
溢出标志 of
0标志 zf
符号标志 sf
辅助进位标志 af
奇偶标志 pf

#### 寻址方式（必考）

立即寻址、直接寻址、寄存器寻址、寄存器间接寻址、基址寻址、变址寻址、基址加变址寻址
对于存储器寻址，内存操作数在存储器里面，注意默认段寄存器的值，牵涉到物理地址如何计算
Mov，AX,[SI+8]，
前面的叫目的操作数，后面的叫源操作数
注意题目要求是源操作数的寻址方式，还是目的操作数的寻址方式
bp默认ss，未见到bp默认ds

#### 指令系统

考试形式很多，最复杂的就是直接写程序
首先，写程序的时候，必须要会，汇编的语法，一个完整的段如何定义，
格式有分，格式很对，程序不对，也可以有分，**格式很重要**
对指令的考试，主要考一些常见的指令

> 提醒：一些常见指令的格式和用法，容易犯错的地方，端口地址

移位指令，一次直接写，多于一次给CL
算术逻辑运算类指令，与或非的典型用法
与：对某些位清零
或：对某些特定的位置1
异或：对特定的位取反
举个栗子
对AL的高两位清零，第六位取反
常用的指令
通用数据类传输指令：MOV，XCHG（交换）
堆栈操作指令：PUSH，POP，十六位，占两个内存单元，push先减2，然后放数据，pop先弹出数据，然后加二
取地址指针，LEA
in，out指令
所有的算术类运算指令，三条加法，ADD，ADC，INC
五条减法，SUB，SBB，DEC，取负指令，NEG，比较指令，CMP
乘法，MUL，IMUL
除法，DIV，IDIV
乘除运算特别要注意，很多寄存器操作对象是默认的
符号拓展指令，CBW，CWD
BCD码的调整指令，压缩BCD调整，DAA，DAS，就两条
非压缩BCD不管
五条逻辑运算指令，与and，或or，非not，xor异或，test与（不保存结果）
移位运算八条，全部掌握，逻辑移位SHR，SHL，算术移位，SAR，SAL，小循环移位，数据本身循环，ROR，ROL，大循环移位，带进位的循环RCR，RCL
无条件转移指令，JMP
对于条件类转移指令，分两个
一个根据标志位的简单转移，JC，JNC，进位，JO，JNO，溢出标志位，JS，JNS，符号标志位
五个标志位，半进位标志不要
两个数比较进行转移，无符号高低，A高B低，N表示否定，E表示相等，有符号G大L小，
循环指令LOOP
停机指令，HLT，空操作指令NOP
对标志位操作的指令，对进位标志操作CLC，清零，STC对进位标志置1

#### 存储器部分的考点

1.存储器的扩展，<u>片内地址</u>和<u>片选地址</u>
构成一个多大的存储器，使用什么样的芯片，这个芯片要多少块，它的片内地址有多少根（取决于芯片）超过的部分，构成片选（线选，部分译码，全译码）结合电路图一定要判断地址范围和容量

关于普通接口里面，重点考查询方式，告诉一个，。。。。，输入口在哪，状态为在哪，1，表示什么，0表示什么，使用查询方式完成数据的输入和输出，

8255，只考方式0，
8253，考的非常简单，只考初始化

![8086 微处理器内部寄存器](https://cdn.jsdelivr.net/gh/hassanblog/CDN@v20210405/posts/Microcomputer_Note/image-20210323171354067.png)

| 状态标志                                        | 含义                                                         | 判断                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **进位标志 CF**<br/>（Carry Flag）              | 当运算结果的最高有效位有进位（加法）或借位（减法）时，进位标志置 1，即 CF = 1；否则 CF = 0。 | 49H+6DH=B6H（无进位：CF=0）<br>BBH+6AH=（1）25H（有进位：CF=1） |
| **零标志 ZF**<br/>（Zero Flag）                 | 若运算结果为 0，则 ZF = 1；否则 ZF = 0；（反着来）           | 49H+6DH=B6H（结果不是零：ZF=0）<br>75H+8BH=（1）00H（结果是零：ZF=1） |
| **符号标志 SF**<br/>（Sign Flag）               | 运算结果最高位为 1，则 SF = 1；否则 SF = 0                   | 3AH+7CH=B6H（最高位 D7=1：SF=1）<br>84H+7CH=（1）00H（最高位 D7=0：SF=0） |
| **奇偶标志 PF**<br/>（Parity Flag）             | 当运算结果最低字节中“1”的个数为零或偶数时，PF = 1；否则 PF = 0 | 3AH+7CH=B6H=10110110B<br>结果中有 5 个 1，是奇数：PF=0       |
| **溢出标志 OF**<br/>（Overflow Flag）           | 若算术运算的结果有溢出，则 OF=1；否则 OF=0。CPU 对 OF 的计算：最高位进位 ⊕ 次高位进位<br>程序员的判断方法：<u>正正相加得负或负负相加得正有溢出，其余均无溢出</u> | 49H+6DH=B6H（产生溢出：OF = 1）<br>75H+8BH=（1）26H（没有溢出：OF = 0） |
| **辅助进位标志 AF**<br>（Auxiliary Carry Flag） | 运算时 D3 位（低半字节）有进位或借位时，AF = 1；否则 AF = 0。 | 49H+6DH=B6H，D3 有进位：AF = 1                               |
| 方向标志 DF<br>（Direction Flag）               | 用于串操作指令中，控制地址的变化方向                         | 设置 DF=0，存储器地址自动增加；<br>设置 DF=1，存储器地址自动减少。 |
| 中断允许标志 IF<br>（Interrupt-enable Flag）    | 用于控制外部可屏蔽中断是否可以被处理器响应                   | 设置 IF ＝ 1，则允许中断；<br>设置 IF ＝ 0，则禁止中断。     |
| 陷阱标志 TF （跟踪标志）<br>（Trap Flag）       | 用于控制处理器进入单步操作方式                               | 设置 TF=0，处理器正常工作；<br>设置 TF=1，处理器单步执行指令。 |

> 能看到这里的人，期末必定90+！
