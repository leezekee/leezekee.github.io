import{_ as e,o as i,c as n,e as d,b as a,f as r}from"./app-fe95e0bc.js";const s={},l=a("p",null,"无意刷到这几道题，既然都看到了，哪有不做的道理",-1),t=r(`<p>首先说明，本文采用的例子均为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树的深度" tabindex="-1"><a class="header-anchor" href="#树的深度" aria-hidden="true">#</a> 树的深度</h2><p>这个问题很简单了吧，基本的数据结构</p><p>最简单的就是递归，将左枝和右枝的深度取最大加一就好</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int get_tree_depth(Node* root) {
    if (!root) {
        return 0;
    }
    int left_depth = get_tree_depth(root-&gt;left);
    int right_depth = get_tree_depth(root-&gt;right);
    return max(left_depth, right_depth) + 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有子树的深度之和" tabindex="-1"><a class="header-anchor" href="#所有子树的深度之和" aria-hidden="true">#</a> 所有子树的深度之和</h2><p>TODO</p><h2 id="所有结点及其子树的深度之和" tabindex="-1"><a class="header-anchor" href="#所有结点及其子树的深度之和" aria-hidden="true">#</a> 所有结点及其子树的深度之和</h2><p>TODO</p><h2 id="树上任意一个点到其他所有结点的距离之和" tabindex="-1"><a class="header-anchor" href="#树上任意一个点到其他所有结点的距离之和" aria-hidden="true">#</a> 树上任意一个点到其他所有结点的距离之和</h2><p>TODO</p>`,14);function c(v,u){return i(),n("div",null,[l,d(" more "),t])}const h=e(s,[["render",c],["__file","树的深度相关问题.html.vue"]]);export{h as default};
