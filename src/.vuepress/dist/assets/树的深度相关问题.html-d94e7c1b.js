import{_ as i,o as n,c as d,e,a as l,f as s}from"./app-5e898efe.js";const t={},a=l("p",null,"无意刷到这几道题，既然都看到了，哪有不做的道理",-1),r=s(`<p>首先说明，本文采用的例子均为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        1
       / \\
      2   3
     / \\ / \\
    4  5 6  7
   / \\
  8   9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结点定义为</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>struct Node {
    int value;
    Node* left = nullptr;
    Node* right = nullptr;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树的深度" tabindex="-1"><a class="header-anchor" href="#树的深度" aria-hidden="true">#</a> 树的深度</h2><p>这个问题很简单了吧，基本的数据结构</p><p>最简单的就是递归，将左枝和右枝的深度取最大加一就好</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/**
 * expect 4
 */
int get_tree_depth(Node* root) {
    if (!root) {
        return 0;
    }
    int left_depth = get_tree_depth(root-&gt;left);
    int right_depth = get_tree_depth(root-&gt;right);
    return max(left_depth, right_depth) + 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有子树的深度之和" tabindex="-1"><a class="header-anchor" href="#所有子树的深度之和" aria-hidden="true">#</a> 所有子树的深度之和</h2><p>这个实际上也很简单，先获取当前结点的深度，然后递归求取左右子结点的所有子树的深度之和，然后将结果相加就好</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/**
 * expect 16
 */
int get_all_depth(Node* root) {
    if (!root) {
        return 0;
    }
    int root_depth = get_tree_depth(root);
    int left_depth = get_all_depth(root-&gt;left);
    int right_depth = get_all_depth(root-&gt;right);
    return root_depth + left_depth + right_depth;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未完...</p>`,12);function c(v,u){return n(),d("div",null,[a,e(" more "),r,e(" TODO ")])}const m=i(t,[["render",c],["__file","树的深度相关问题.html.vue"]]);export{m as default};
