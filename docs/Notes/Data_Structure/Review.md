**复习计划**：

- [ ] 看完所有必考概念
- [ ] 做wsz老师发的章节测试

## 三大类排序

1. **冒泡**

	相邻俩数作比较，比较是否换位。每一次扫描，使最值被移到了末尾的位置，以此类推。

	> **Tips**：第一次扫描 != 第一次互换

	比较次数:n(n-1)/2

	时间复杂度：O(n^2)

	<u>稳定排序法</u>

2. **选择**

	若为从小到大排序，则每一次扫描把最小值放首位置，然后第二次扫描，第一个数就不用比较。从大到小同理。

	比较次数:n(n-1)/2

	时间复杂度：O(n^2)

	<u>非稳定排序法</u>

3. **插入**

	跟斗地主开头拿牌工作一样，来一张牌，就把它与其它牌对比大小然后插在相应位置。插入排序也如此，将数组中的元素逐一与已排好的数据进行比较，前俩先排好，再排第三个元素。

	比较次数：n(n-1)/2 

	时间复杂度：O(n^2)

	最好情况复杂度：O(n)

	<u>稳定排序法</u>

## 其他排序

1. **希尔**

	将数据按特定间隔分成几个小区块（每块2个数据），块内比较，过后缩小两两分块的间距（重新分块）继续比较，以此类推，最后一次用插入排序法。

	时间复杂度：O[ n^(3/2) ]

	<u>稳定排序法</u>

2. **快速**（分割交换排序法）

	找一个中间值，小放左，大放右，以同样方式处理。

	平均时间复杂度：O(n log 2 n) 

	最坏情况：O(n^2)

## 查找

1. **顺序**：时间复杂度：O(n)

2. **折半（二分）法**：时间复杂度：O(log n)

## 树

1. **非二叉树**： 杠数 (两结点间的线) **=** 总结点数-1

2. **哈夫曼树**： 没有度为1的结点，有n个叶子结点的哈夫曼树，结点总数为 2n-1个。

## 图

1. n个结点的无向图最少 n-1 条边，最多 n(n – 1)/2 条边

2. 图的数据表示法

![](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/DataStructure_Note/image-20210609213951474.png)![邻接矩阵法](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/DataStructure_Note/image-20210609214131279.png)

![邻接表法（0连1和2，答案错了）](https://cdn.jsdelivr.net/gh/hassanblog/CDN/posts/DataStructure_Note/image-20210609214451740.png)



3. 图的生成最小树的方法：先把所有线去掉，然后找到之前最短的线（线值最小的线），连接两点，依次顺着找下一条最短的线，以此类推。

## 数组

已知m行n列的二维数组A,采用行序为主方式存储，每个元素占k个存储单元，`A[0][0]`的地址是x，则`A[i][j]`的地址是（ x+k(n*i+j) ）

## ASL

### 二叉排序树

（**成功**）平均查找长度（ASL）：**ASL=P1C1 + P2C2 +P3C3 + …… + PnCn** , 即查到每个数据的概率 乘 比较次数之和。

（**不成功**）平均查找长度（ASL）：内部结点都能查找成功，而查找不成功的就是那些空的外部结点。**ASL=**空结点比较次数 乘 查找概率之和

### 哈希表

（**成功**）**ASL=** 查到每个数据的概率 乘 比较次数之和。

Tips : 其实概率就是元素个数分之一。