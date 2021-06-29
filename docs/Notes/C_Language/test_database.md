> 这是我在机房刷题时所记录的题，因为期末是在题库中随机抽取，所以记录下来很有必要。题目我根据难度分为两种，一是简单题，二是困难题，当然困难题只是根据我目前基础而定。若能帮到路过的友友们，我会感到值得。另外说句，2021春改革了，是5道大题110分钟。

## 简单题

功能：从低位开始取出长整型变量s奇数位上的数，依次构成一个新数放在t中。   

例如：当s中的数为：7654321时，t中的数为：7531。

```c
#include <stdio.h>

long fun (long s,long t)
{  
  /**********Program**********/
	long i = 1, ji = 1;
	while(s) 
	{
		if (ji % 2 == 1) {
			t += s%10 * i;
			i *= 10;
		}
		s /= 10;
		ji++;
	}
  /**********  End  **********/
  return t;
}  

main()     
{
  long s, t=0,m;
  printf("\nPlease enter s:"); scanf("%ld", &s);     
  m=fun(s,t);
  printf("The result is: %ld\n", m);
}
```

题目：函数fun()功能，求二维数组中对角线及其以上元素的最小值，并将最小值返回给主函数。

```c
#include <stdio.h>
#define M 4
int fun(int a[][M] )
{
    /**********Program**********/
	int min = 100, i, j;
	for (i = 0; i < M; i++) {
		for (j = i; j < M; j++) {
			if (min > a[i][j]) {
				min = a[i][j];
			}
		}
	}

	return min;
    /**********  End  **********/
}
int main( )
{
    int a[M][M]= {5,6,14,16,11,2,15,8,4,3,9,12,1,7,10,13},k;
    k=fun(a);
    printf("对角线及其以上元素的最小值是%2d。\n",k);
    return 0;
}
```

!> 注意：此题我认为表达模棱两可，题库正确答案表示此处的对角线是正对角线，而我把正副对角线都考虑进去了，考试时就按照正对角线。

---

题目：请编写函数void fun (int x, int pp[], int *n)，它的功能是：求出能整除x且不是偶数的各整数，并按从小到大的顺序放在pp所指的数组中，这些除数的个数通过形参n返回。

例如：若x中的值为30，则有4个数符合要求，它们是1、3、5、15。

```c
#include <conio.h>
#include <stdio.h>
#include <stdlib.h>

void fun (int x, int pp[], int *n)
{
/**********Program**********/
	int i ,j = 0;
	for (i = 1; i < x; i++) {
		if (x % i == 0 && i % 2 == 1) {
			pp[j] = i;
			j++;
		}
	}
	*n = j;
/**********  End  **********/
}

void main ()
{ 
        int  x,aa[1000], n, i ;
        system("CLS");
        printf("\nPlease enter an integer number : \n ") ;
        scanf ("%d", &x) ;
        fun (x, aa, &n) ;
        for (i=0 ; i<n ; i++)
                printf ("%d ", aa [i]);
        printf ("\n ") ;
}
```

---

题目：函数fun的功能是：将s所指字符串中下标为偶数同时ASCII值为奇数的字符删除，s所指串中剩余的字符形成的新串放在t所指的数组中。

例如：若s所指字符串中的内容为"ABCDEFG12345"，其中字符C的ASCII码值为奇数，在数组中的下标为偶数，因此必须删除；而字符1的ASCII码值为奇数，在数组中的下标为奇数，因此不应当删除，其他依此类推。最后t所指的数组中的内容应
是"BDF12345"。

```c
#include <stdio.h>
#include <string.h>

void fun(char  *s, char  t[])
{
/**********Program**********/
	int i, j = 0;
	for (i = 0; s[i] != '\0'; i++) {
		if (!(i % 2 == 0 && s[i] % 2 == 1)) {
			t[j] = s[i];
			j++;
		}
	}
	// 注意一定要有结尾符号
	t[j] = '\0';
/**********  End  **********/
}

void main()
{
        char s[100], t[100];
        printf("\nPlease enter string S:"); 
        scanf("%s", s);
        fun(s, t);
        printf("\nThe result is: %s\n", t);
}
```

---

函数fun的功能：对一个任意位数的正整数n，，从十位起计算隔位数字之和，即十位、
千位、……等数字之和。例如输入1234567，6+4+2的结果为12。

```c
int fun(int n)
{
  int sum=0;
  /**********Program**********/
	int ou = 1;
	while (n) {
		if (ou % 2 == 0) {
			sum += n % 10;
		}
		n /= 10;
		ou++;
	}
  /********** End **********/ 
  return sum;
}

#include <stdio.h>
int main()
{
  int n;
  printf("输入一个正整数: ");
  scanf("%d",&n);
  printf("从十位起,隔位数字之和是%d\n",fun(n));
  return 0;
}
```

---

题目：求s=a+aa+aaa+aa…aa(n个a),其中a，n由键盘输入。（例如2+22+222+2222+22222，此时n为5，a为2）

要求：循环控制变量用i，中间项存于变量t中。

```c
#include<stdio.h>
void main()
{

/**********Program**********/
	int i,a,n,s=0,t=0;
    scanf("%d%d", &a, &n);
	for (i = 1; i <= n; i++) {
        t = 10*t + a;
        s = s + t;
    }
	printf("%d", s);
/********** End **********/

}
```

---

题目：请编一个函数void fun(int tt[M][N], int pp[N]), tt指向一个M行N列的

二维数组，求出二维数组每列中最大元素，并依次放入pp所指的一维数组中。

二维数组中的数已在主函数中给出。

注意：请勿改动主函数main和其他函数中的任何内容，仅在函数fun的花括号中填入你编写的若干语句。

```c
#include <conio.h>
#include <stdio.h>
#include <stdlib.h>

#define  M  3
#define  N  4

void fun(int  tt[M][N],int  pp[N])
{
/**********Program**********/
	int i, j, max = 0;
	for (i = 0; i < N; i++) {
		for (j = 0; j < M; j++) {
			if (max <= tt[j][i]) {
				max = tt[j][i];
			}
		}
		pp[i] = max;
		max = 0;
	}
/**********  End  **********/
}


main( )
{
        int t[M][N]={{68, 32, 54, 12},{14, 24, 88, 58},{42, 22, 44, 56}};
        int  p [ N ],  i,  j,  k;
        printf ( "The original data is : \n" );
        for( i=0; i<M; i++ )
        {
                for( j=0; j<N; j++ )
                        printf ( "%6d", t[i][j] );
                printf("\n");
        }
        fun ( t, p );
        printf( "\nThe result  is:\n" );
        for ( k = 0; k < N; k++ )
                printf ( " %4d ", p[ k ] );
        printf("\n");
        system("pause");
}
```

---

题目：编写函数fun，其功能是：求ss所指字符串中指定字符的个数，并返回此值。

例如：若输入字符串123412132，输入字符为1，则输出3。

注意：请勿改动主函数main和其它函数中的任何内容，仅在函数fun的花括号中填入你编写的若干语句。

```c
#include <stdio.h>
#include <string.h>

#define M 81

int fun(char *ss, char c)
{
/**********Program**********/
	int i, sum = 0;
	for (i = 0; ss[i] != '\0'; i++) {
		if (ss[i] == c) {
			sum++;
		}
	}

	return sum;
/********** End **********/
}

void main()
{ 
    char a[M], ch;
    printf("\nPlease enter a string:");
    gets(a);
    printf("\nPlease enter a char:"); 
    ch = getchar();
    printf("\nThe number of the char is: %d\n", fun(a, ch));
}
```

---

题目：函数fun的功能：返回两个自然数n1、n2之间素数的个数。

例如：100~200间素数个数为21。

```c
#include <stdio.h>
#include <math.h>
int fun(int n1,int n2)
{
  /**********Program**********/
	int i, num = 0;
	for (n1; n1 <= n2; n1++) {
		for (i = 2; i <= sqrt(n1*1.0); i++) {
			if (n1 % i == 0) {
				break;
			}
		}
		if (i > sqrt(n1 * 1.0)) {
			num++;
		}
	}
	return num;
  /********** End **********/
}
int main( )
{ 
  int count;
  count=fun(100,200);
  printf("素数个数是 %d\n",count);
  return 0;
}
```

---

题目：输入一个正整数repeat (0<repeat<10)，做repeat次下列运算：
   编写程序，输入一个正整数n，求1＋1/2＋1/3＋......的前n项之和，输出时保留6位小数。

输入输出示例：括号内为说明
输入：
2    (repeat=2)
6    (计算1+1/2+1/3+1/4+1/5+1/6)
2    (计算1+1/2)
输出：
sum = 2.450000
sum = 1.500000

```c
#include <stdio.h>
void main( )
{   
    int i, n;
    int repeat, ri;
    double sum;

    scanf("%d", &repeat);
    for(ri = 1; ri <= repeat; ri++)
    {
        scanf("%d", &n);
        /**********Program**********/
		sum = 0;
		for (i = 1; i <= n; i++) {
			sum += (double)1/i;
		}
        /**********  End  **********/
        printf("sum = %.6f\n", sum);
    }             
}
```

---

题目：编写函数fun，其功能是：求Fibonacci数列中大于t的最小的数，结果由函数返回。

Fibonacci数列F(n)的定义为：F(0)＝0，F(1)＝1，F(n)＝F(n－1)＋F(n－2)

例如：当t＝1000时，函数值为1597。

```c
#include <math.h>
#include <stdio.h>
#include<stdlib.h> 
int  fun( int  t)
{
/**********Program**********/
	int i, ans, a = 0, b = 1;
	if (t == 0) {
		return 1;
	} else {
		while(1) {
			ans = a + b;
			a = b;
			b = ans;
			if (ans > t) {
				return ans;
			}
		}
	}
/**********  End  **********/
}

main()   /* 主函数 */
{ 
        int  n;
        n=1000;
        printf("n = %d, f = %d\n",n, fun(n));
        system("pause");
}
```

---

功能：编写函数fun求s=1^k+2^k +3^k + ......+N^k的值，（1的K次方到N的K次方的累加和）。

```c
#define K 4
#define N 5
#include <stdio.h>

long  fun(int n,int k)
{
  /**********Program**********/
	long i, j, s = 0, t, t1 = 1;
	for (i = 0; i < n; i++) {
		t = 1;
		for (j = 0; j < k; j++) {
			t *= t1;
		}
		s += t;
		t1++;
	}
	return s;
  /**********  End  **********/
}

main()
{
  long int sum;
  printf("Sum of %d powers of integers from 1 to %d = ",K,N);
  sum=fun(N,K);
  printf("%ld\n",sum);
 
}
```

---

⭐功能：删除所有值为y的元素。数组元素中的值和y的值由主函数通过键盘输入。

```c
#include <stdio.h>
#include<conio.h>
#include<stdio.h>
#define M 20
void fun(int bb[],int *n,int y)
{
  /**********Program**********/
	int i, j;
	for (i = 0; i < *n;) {
		if (bb[i] == y) {
			for (j = i; j < *n; j++) {
				bb[j] = bb[j+1];
			}
			*n = *n - 1; //不能*n--
		} else {
			i++; // 不能随意i++，否则下一个还是要删除的数，所以先再判断一下，不等于再来i++
		}
	}
  /**********  End  **********/
}
main ()
{
  int aa[M],n,y,k;
  printf("\nPlease enter n:");scanf("%d",&n);
  printf("\nEnter %d positive number:\n",n);
  for(k=0;k<n;k++) scanf("%d",&aa[k]);
  printf("The original data is:\n");
  for(k=0;k<n;k++) printf("%5d",aa[k]);
  printf("\nEnter a number to deletede:");scanf("%d",&y);
  fun(aa,&n,y);
  printf("The data after deleted %d:\n",y);
  for(k=0;k<n;k++) printf("%4d",aa[k]);
  printf("\n");
}
```

---

函数fun的功能：将数组a中所有元素（共n个）的平均值作为函数返回值，并将大于平均值的数组元素个数，存放在形参pnum所指的存储单元中。

```c
#include <stdio.h>
#define N 8
float fun(float a[],int n,int *pnum)
{
    /**********Program**********/
	int i, t = 0;
	float sum = 0.0;
	for (i = 0; i < n; i++) {
		sum += a[i];
	}
	sum /= n;
	for (i = 0; i < n; i++) {
		if (sum < a[i]) {
			t++;
		}
	}
	*pnum = t;
	return sum;
    /**********  End  **********/
}

int main()
{  
    float a[N],aver;
    int  i,num;
    printf("Input %d numbers :\n",N);
    for( i=0; i<N; i++)
        scanf ("%f", &a[i] ) ;
    aver=fun(a, N, &num);
    printf( "Ave = %f\n", aver) ;
    printf( "The number is %d\n", num);
    return 0;
}
```



## 困难题

题目：小丁是阿里巴巴公司程序员，这天项目经理给他一个结构体定义 

```c
typedef struct worker {
    int id;
    char name[20];
    int age;
} worker;
```

小丁一看，这不是一个工人的定义吗，包括编号id,姓名，年龄什么的。经理说，我需要你写一个函数，能更改数据区中某个id的工人姓名和年龄。函数声明是这样的：

`int modifyworker(worker *w, int n ,int id, char *name, int age);`

经理说，参数w是这批工人数据的首地址，这批数据是连续存放的，n是工人的数目，id是要修改的工人编号，name和age是新的姓名和年龄。如果查到工人并完成修改工作，返回1，如果查不到这个工人，返回0。

请你帮小丁完成这个函数。

```c
#include <stdio.h>
#include <string.h>
#include <math.h>
typedef struct worker {
	int id;
	char name[20];
	int age;
} worker;
int modifyworker(worker *w, int n ,int id, char *name, int age)
{
/**********Program**********/
	int i;
    for (i = 0; i < n; i++) {
    	if (w[i].id == id) {
	    	strcpy(w[i].name, name);
	    	w[i].age = age;
	    	return 1;
		}
	}
    
	return 0;
/**********  End  **********/
}

int main()
{
        unsigned int i,n;
        worker P[100], pmodify;
        scanf("%d",&n);
        for (i=0;i<n;i++)
            scanf("%d %s %d",&(P[i].id), P[i].name, &(P[i].age));
        scanf("%d %s %d",&(pmodify.id), pmodify.name, &(pmodify.age));
    
        if (modifyworker(P,n,pmodify.id, pmodify.name, pmodify.age)==0)
            printf("error!");
        else
            for (i=0;i<n;i++)
                printf("\n%d %s %d",P[i].id, P[i].name, P[i].age);

    return 1;
}
```

---

题目：学生记录由学号和成绩组成，N名学生的数据已放入主函数中的结构体数组中，请编写函数fun，其功能是：把分数最低的学生数据放入b所指的数组中，注意：分数最低的学生可能不止一个，函数返回分数最低的学生人数。

注意：请勿改动主函数main和其它函数中的任何内容，仅在函数fun的花括号中填入你编写的若干语句。

```c
#include <stdio.h>

#define   N   16

typedef  struct
{  
    char  num[10];
    int   s;
} STREC;
int  fun( STREC  *a, STREC *b )
{
/**********Program**********/
	int low, i, j = 0, k, num = 0;
	low = a[0].s;
	for (i = 0; i < N; i++) {
		if (low >= a[i].s) {
			low = a[i].s;
		}
	}
	for (i = 0; i < N; i++) {
		if (low == a[i].s) {
			b[j++] = a[i];
			num++;
		}
	}
	return num;
/**********  End  **********/
}

void main()
{  
        STREC  s[N]={{"GA05",85},{"GA03",76},{"GA02",69},{"GA04",85},
                {"GA01",91},{"GA07",72},{"GA08",64},{"GA06",87},
                {"GA015",85},{"GA013",91},{"GA012",64},{"GA014",91},
                {"GA011",91},{"GA017",64},{"GA018",64},{"GA016",72}};
        STREC  h[N];
        int  i,n;
        n=fun( s,h );
        printf("The %d lowest score :\n",n);
        for(i=0;i<n; i++)
                printf("%s  %4d\n",h[i].num,h[i].s);
        printf("\n");
}
```

---
