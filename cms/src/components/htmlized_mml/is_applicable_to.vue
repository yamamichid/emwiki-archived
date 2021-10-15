<template>
            <main class="container-fluid">
            <div class="row">
        <div id="content" class="col-9 pl-3">
            <div class="mml-summary">
                <h1 class="d-inline">is_applicable_to</h1>
                <hr class="mb-0">
                <h4 class="mb-5">pred</h4>
        
                <div class='card mb-5'>
                    <div class='card-body'>
                        <h5 class='card-title'>List of Definitions (3)</h5>
                        <ol class='section-nav'>
        
                            <li class="toc-entry toc-h2">
                                <v-btn :to="{ name: 'Article', hash: '#ELM0', params: { name: 'abcmiz_0' } }">is_applicable_to</v-btn>[<span data-href='abcmiz_0.html#R1'>abcmiz_0</span>]
                            </li>
            
                            <li class="toc-entry toc-h2">
                                <span :to='{ name: is_applicable_to, hash: #ELM1 }'>is_applicable_to</span>[<span data-href='abcmiz_0.html#R2'>abcmiz_0</span>]
                            </li>
            
                            <li class="toc-entry toc-h2">
                                <v-btn :to='{ name: is_applicable_to, hash: #ELM2 }'>is_applicable_to</v-btn>[<span data-href='abcmiz_0.html#R3'>abcmiz_0</span>]
                            </li>
            
                        </ol>
                    </div>
                </div>
            </div>
        
            <div class='card mml-element mt-2'  id='ELM0'>
                <div class='card-header'>
                    <h3>1. <span :to='{ name: is_applicable_to, hash: #ELM0 }'>is_applicable_to</span> [<span data-href='abcmiz_0.html#R1'>abcmiz_0</span>]</h3>
                </div>
                <div class='card-body'>
        
                <div class='source'>
                    <h4>Source <span class='defined-in'> [<span data-href='abcmiz_0.html#R1'>abcmiz_0</span>]</span></h4>
                    <div class='source-box bg-light p-3'>
                        <div>
<span class="kw">definition</span><div class="add">
<span class="kw">let </span><font color="Maroon" title="c1">T</font> be    <span title="ABCMIZ_0:struct.2" data-link="TA-structure#ELM7">TA-structure</span> ;<br><span class="kw">let </span><font color="Maroon" title="c2">t</font> be   <span title="STRUCT_0:NM.1" data-link="Element#ELM25747">Element</span> of <font color="Maroon" title="c1">T</font>;<br><span class="kw">let </span><font color="Maroon" title="c3">a</font> be   <span title="ABCMIZ_0:NM.2" data-link="adjective#ELM10">adjective</span> of <font color="Maroon" title="c1">T</font>;<br><div about="#D0" typeof="oo:Definition" class="main-sentence">
<a name="R1"><span class="kw">pred</span> </a><font color="Maroon" title="c3">a</font> <span title="ABCMIZ_0:pred.1" data-link="is_applicable_to#ELM0">is_applicable_to</span> <font color="Maroon" title="c2">t</font><span class="kw"> means </span><a name="D15"><span class="comment"><font color="firebrick">:: ABCMIZ_0:def 15</font></span><br></a> ex <font color="Olive" title="b1">t9</font> being   <span title="ABCMIZ_0:NM.1" data-link="type#ELM9">type</span> of <font color="Maroon" title="c1">T</font> st <br>( <font color="Olive" title="b1">t9</font> <span title="TARSKI:pred.2" data-link="in#ELM26063">in</span>  <span title="ABCMIZ_0:func.3" data-link="types#ELM13">types</span> <font color="Maroon" title="c3">a</font> &amp; <font color="Olive" title="b1">t9</font> <span title="ORDERS_2:pred.1" data-link="&lt;=#ELM18882">&lt;=</span> <font color="Maroon" title="c2">t</font> );<br>
</div>
</div>
<span class="kw">end;</span>
</div>


                    </div>
                </div>
            
                </div>
            </div>
        
            <div class='card mml-element mt-2'  id='ELM1'>
                <div class='card-header'>
                    <h3>2. <span :to='{ name: is_applicable_to, hash: #ELM1 }'>is_applicable_to</span> [<span data-href='abcmiz_0.html#R2'>abcmiz_0</span>]</h3>
                </div>
                <div class='card-body'>
        
                <div class='source'>
                    <h4>Source <span class='defined-in'> [<span data-href='abcmiz_0.html#R2'>abcmiz_0</span>]</span></h4>
                    <div class='source-box bg-light p-3'>
                        <div>
<span class="kw">definition</span><div class="add">
<span class="kw">let </span><font color="Maroon" title="c1">T</font> be    <span title="ABCMIZ_0:struct.2" data-link="TA-structure#ELM7">TA-structure</span> ;<br><span class="kw">let </span><font color="Maroon" title="c2">t</font> be   <span title="ABCMIZ_0:NM.1" data-link="type#ELM9">type</span> of <font color="Maroon" title="c1">T</font>;<br><span class="kw">let </span><font color="Maroon" title="c3">A</font> be   <span title="SUBSET_1:NM.2" data-link="Subset#ELM25868">Subset</span> of  the <span title="ABCMIZ_0:sel.1" data-href="abcmiz_0.html#U1">adjectives</span> of <font color="Maroon" title="c1">T</font>;<br><div about="#D0" typeof="oo:Definition" class="main-sentence">
<a name="R2"><span class="kw">pred</span> </a><font color="Maroon" title="c3">A</font> <span title="ABCMIZ_0:pred.2" data-link="is_applicable_to#ELM1">is_applicable_to</span> <font color="Maroon" title="c2">t</font><span class="kw"> means </span><a name="D16"><span class="comment"><font color="firebrick">:: ABCMIZ_0:def 16</font></span><br></a> ex <font color="Olive" title="b1">t9</font> being   <span title="ABCMIZ_0:NM.1" data-link="type#ELM9">type</span> of <font color="Maroon" title="c1">T</font> st <br>( <font color="Maroon" title="c3">A</font> <span title="TARSKI:pred.1" data-link="c=#ELM26062">c=</span>  <span title="ABCMIZ_0:func.2" data-link="adjs#ELM12">adjs</span> <font color="Olive" title="b1">t9</font> &amp; <font color="Olive" title="b1">t9</font> <span title="ORDERS_2:pred.1" data-link="&lt;=#ELM18882">&lt;=</span> <font color="Maroon" title="c2">t</font> );<br>
</div>
</div>
<span class="kw">end;</span>
</div>


                    </div>
                </div>
            
                </div>
            </div>
        
            <div class='card mml-element mt-2'  id='ELM2'>
                <div class='card-header'>
                    <h3>3. <span :to='{ name: is_applicable_to, hash: #ELM2 }'>is_applicable_to</span> [<span data-href='abcmiz_0.html#R3'>abcmiz_0</span>]</h3>
                </div>
                <div class='card-body'>
        
                <div class='source'>
                    <h4>Source <span class='defined-in'> [<span data-href='abcmiz_0.html#R3'>abcmiz_0</span>]</span></h4>
                    <div class='source-box bg-light p-3'>
                        <div>
<span class="kw">definition</span><div class="add">
<span class="kw">let </span><font color="Maroon" title="c1">T</font> be   non  <span title="STRUCT_0:attr.2" data-link="empty#ELM25771">empty</span>   <span title="ORDERS_2:attr.3" data-link="reflexive#ELM18897">reflexive</span>   <span title="ORDERS_2:attr.4" data-link="transitive#ELM18898">transitive</span>   non  <span title="ABCMIZ_0:attr.4" data-link="void#ELM26">void</span>   <span title="ABCMIZ_0:struct.2" data-link="TA-structure#ELM7">TA-structure</span> ;<br><span class="kw">let </span><font color="Maroon" title="c2">t</font> be   <span title="ABCMIZ_0:NM.1" data-link="type#ELM9">type</span> of <font color="Maroon" title="c1">T</font>;<br><span class="kw">let </span><font color="Maroon" title="c3">v</font> be    <span title="FINSEQ_1:mode.2" data-link="FinSequence#ELM7091">FinSequence</span> of  the <span title="ABCMIZ_0:sel.1" data-href="abcmiz_0.html#U1">adjectives</span> of <font color="Maroon" title="c1">T</font>;<br><div about="#D0" typeof="oo:Definition" class="main-sentence">
<a name="R3"><span class="kw">pred</span> </a><font color="Maroon" title="c3">v</font> <span title="ABCMIZ_0:pred.3" data-link="is_applicable_to#ELM2">is_applicable_to</span> <font color="Maroon" title="c2">t</font><span class="kw"> means </span><a name="D21"><span class="comment"><font color="firebrick">:: ABCMIZ_0:def 21</font></span><br></a> for <font color="Olive" title="b1">i</font> being   <span title="NAT_1:NM.1" data-link="Nat#ELM17446">Nat</span><br>  for <font color="Olive" title="b2">a</font> being   <span title="ABCMIZ_0:NM.2" data-link="adjective#ELM10">adjective</span> of <font color="Maroon" title="c1">T</font><br>  for <font color="Olive" title="b3">s</font> being   <span title="ABCMIZ_0:NM.1" data-link="type#ELM9">type</span> of <font color="Maroon" title="c1">T</font>  st <font color="Olive" title="b1">i</font> <span title="TARSKI:pred.2" data-link="in#ELM26063">in</span>  <span title="FINSEQ_1:func.4" data-link="dom#ELM7097">dom</span> <font color="Maroon" title="c3">v</font> &amp; <font color="Olive" title="b2">a</font> <span title="HIDDEN:pred.1" data-link="=#ELM11932">=</span> <font color="Maroon" title="c3">v</font> <span title="FUNCT_1:func.1" data-link=".#ELM8818">.</span> <font color="Olive" title="b1">i</font> &amp; <font color="Olive" title="b3">s</font> <span title="HIDDEN:pred.1" data-link="=#ELM11932">=</span> <span class="p1">(<span class="default"><span title="ABCMIZ_0:func.7" data-link="apply#ELM17">apply</span> (<font color="Maroon" title="c3">v</font>,<font color="Maroon" title="c2">t</font>)</span>)</span> <span title="FUNCT_1:func.1" data-link=".#ELM8818">.</span> <font color="Olive" title="b1">i</font> holds <br><font color="Olive" title="b2">a</font> <span title="ABCMIZ_0:pred.1" data-link="is_applicable_to#ELM0">is_applicable_to</span> <font color="Olive" title="b3">s</font>;<br>
</div>
</div>
<span class="kw">end;</span>
</div>


                    </div>
                </div>
            
                </div>
            </div>
        </div><div id="scrollspy" class="col-3" >
            <nav id="list-of-definitions" class="d-none d-xl-block bd-toc sticky-top" aria-label="Secondary navigation">
                <h4>3 Definitions</h4>
                <ol class="section-nav">
        
                <li class="toc-entry toc-h2">
                    <span :to='{ name: is_applicable_to, hash: #ELM0 }'>is_applicable_to</span>[<span data-href='abcmiz_0.html#R1'>abcmiz_0</span>]
                </li>
            
                <li class="toc-entry toc-h2">
                    <span :to='{ name: is_applicable_to, hash: #ELM1 }'>is_applicable_to</span>[<span data-href='abcmiz_0.html#R2'>abcmiz_0</span>]
                </li>
            
                <li class="toc-entry toc-h2">
                    <span :to='{ name: is_applicable_to, hash: #ELM2 }'>is_applicable_to</span>[<span data-href='abcmiz_0.html#R3'>abcmiz_0</span>]
                </li>
            
                </ol>
            </nav>
        </div>
            </div>
<template>

<script>
</script>