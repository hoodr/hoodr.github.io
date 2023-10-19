# Working Through Confusing Types

I'd like to preface this post by making it clear that this is confusing to me,
which may obviously differ from others, so this post is really meant for those
who, like me, haven't worked in c/c++ in a long time.

Below I've highlighted a couple type definitions that I've found ... interesting,
as I've been working through the c++ code

```cpp
typedef typedef Eigen::Matrix<float, 10, 1> Vec10f;
```

## Pointer to an 
```cpp
Pnt *points[PYR_LEVELS];
Eigen::Vector3f *dIp[PYR_LEVELS];
```


## Pointer to an Eigen Aligned Vector of length 10

```cpp
Vec10f *JbBuffer;
```

People love to complain about pointers in c++ and while I often agree with that
sentiment it would be completely false to say that c++ points can allow you to
do some very fun and very clever things. I think the issue people have with said
fun and clever things is that they don't tend to be well documented and become
exciting surprises down the road. Nevertheless, I think this bit is pretty cool
in the actual implementation here is an aligned block of memory where pointer
arithmatic is very necessary in order to access the correct values. Effectively,
this became a custom implementation of SIMD.

This is I think is 

```cpp
// declare and instantiate
bool *m = new bool[w[0] * h[0]];

int inc = 0;
for (int x = 0; x < z; x++) {
  for (int y = 0; y < w; y++) {
    int tmp = 1;
    bool *m0 = m + x + y * w;
    if (tmp >= 0) {
      if (!m0[tmp])
        inc++;
      m0[tmp] = true;
    }
  }
}
```

So, what is `m0` in this context? Well, one would probably hazard a guess that
it's a pointer to a boolean `x + y * w` steps away from the starting point,
right? So then what is `m0[tmp]` then? To answer that, let's refresh on a
little c++:

```cpp
int* a = new int[10];

int a0_val = *(a + 0);
int* a0_ptr = a + 0;
int a1_val = a[1];
int* a1_ptr = a + 1;
```

See, you can derefence the pointer using `[]`, which means that going back to
the original example you can see that `bool* m0` gives us a pointer to spot in
memory, then `m0[tmp]` is derefencing a object in memory that is `(x + y * w)
+ tmp` steps away from the starting pointer of `m`. It's always small things
like this that make sense after you've taken some time to think and research,
but in the moment can be a bit frustrating when you don't work with pointers
very often.


