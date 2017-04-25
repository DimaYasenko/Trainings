// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__28263__auto__,writer__28264__auto__,opt__28265__auto__){
return cljs.core._write.call(null,writer__28264__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30790 = arguments.length;
var i__28733__auto___30791 = (0);
while(true){
if((i__28733__auto___30791 < len__28732__auto___30790)){
args__28739__auto__.push((arguments[i__28733__auto___30791]));

var G__30792 = (i__28733__auto___30791 + (1));
i__28733__auto___30791 = G__30792;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq30789){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30789));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30794 = arguments.length;
var i__28733__auto___30795 = (0);
while(true){
if((i__28733__auto___30795 < len__28732__auto___30794)){
args__28739__auto__.push((arguments[i__28733__auto___30795]));

var G__30796 = (i__28733__auto___30795 + (1));
i__28733__auto___30795 = G__30796;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq30793){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30793));
});

var g_QMARK__30797 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_30798 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30797){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30797))
,null));
var mkg_30799 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30797,g_30798){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30797,g_30798))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__30797,g_30798,mkg_30799){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30797).call(null,x);
});})(g_QMARK__30797,g_30798,mkg_30799))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__30797,g_30798,mkg_30799){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_30799).call(null,gfn);
});})(g_QMARK__30797,g_30798,mkg_30799))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__30797,g_30798,mkg_30799){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_30798).call(null,generator);
});})(g_QMARK__30797,g_30798,mkg_30799))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28808__auto___30818 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28808__auto___30818){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30819 = arguments.length;
var i__28733__auto___30820 = (0);
while(true){
if((i__28733__auto___30820 < len__28732__auto___30819)){
args__28739__auto__.push((arguments[i__28733__auto___30820]));

var G__30821 = (i__28733__auto___30820 + (1));
i__28733__auto___30820 = G__30821;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30818))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30818){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30818),args);
});})(g__28808__auto___30818))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28808__auto___30818){
return (function (seq30800){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30800));
});})(g__28808__auto___30818))
;


var g__28808__auto___30822 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28808__auto___30822){
return (function cljs$spec$impl$gen$list(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30823 = arguments.length;
var i__28733__auto___30824 = (0);
while(true){
if((i__28733__auto___30824 < len__28732__auto___30823)){
args__28739__auto__.push((arguments[i__28733__auto___30824]));

var G__30825 = (i__28733__auto___30824 + (1));
i__28733__auto___30824 = G__30825;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30822))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30822){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30822),args);
});})(g__28808__auto___30822))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28808__auto___30822){
return (function (seq30801){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30801));
});})(g__28808__auto___30822))
;


var g__28808__auto___30826 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28808__auto___30826){
return (function cljs$spec$impl$gen$map(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30827 = arguments.length;
var i__28733__auto___30828 = (0);
while(true){
if((i__28733__auto___30828 < len__28732__auto___30827)){
args__28739__auto__.push((arguments[i__28733__auto___30828]));

var G__30829 = (i__28733__auto___30828 + (1));
i__28733__auto___30828 = G__30829;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30826))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30826){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30826),args);
});})(g__28808__auto___30826))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28808__auto___30826){
return (function (seq30802){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30802));
});})(g__28808__auto___30826))
;


var g__28808__auto___30830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28808__auto___30830){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30831 = arguments.length;
var i__28733__auto___30832 = (0);
while(true){
if((i__28733__auto___30832 < len__28732__auto___30831)){
args__28739__auto__.push((arguments[i__28733__auto___30832]));

var G__30833 = (i__28733__auto___30832 + (1));
i__28733__auto___30832 = G__30833;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30830))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30830){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30830),args);
});})(g__28808__auto___30830))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28808__auto___30830){
return (function (seq30803){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30803));
});})(g__28808__auto___30830))
;


var g__28808__auto___30834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28808__auto___30834){
return (function cljs$spec$impl$gen$set(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30835 = arguments.length;
var i__28733__auto___30836 = (0);
while(true){
if((i__28733__auto___30836 < len__28732__auto___30835)){
args__28739__auto__.push((arguments[i__28733__auto___30836]));

var G__30837 = (i__28733__auto___30836 + (1));
i__28733__auto___30836 = G__30837;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30834))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30834){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30834),args);
});})(g__28808__auto___30834))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28808__auto___30834){
return (function (seq30804){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30804));
});})(g__28808__auto___30834))
;


var g__28808__auto___30838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28808__auto___30838){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30839 = arguments.length;
var i__28733__auto___30840 = (0);
while(true){
if((i__28733__auto___30840 < len__28732__auto___30839)){
args__28739__auto__.push((arguments[i__28733__auto___30840]));

var G__30841 = (i__28733__auto___30840 + (1));
i__28733__auto___30840 = G__30841;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30838))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30838){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30838),args);
});})(g__28808__auto___30838))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28808__auto___30838){
return (function (seq30805){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30805));
});})(g__28808__auto___30838))
;


var g__28808__auto___30842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28808__auto___30842){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30843 = arguments.length;
var i__28733__auto___30844 = (0);
while(true){
if((i__28733__auto___30844 < len__28732__auto___30843)){
args__28739__auto__.push((arguments[i__28733__auto___30844]));

var G__30845 = (i__28733__auto___30844 + (1));
i__28733__auto___30844 = G__30845;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30842))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30842){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30842),args);
});})(g__28808__auto___30842))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28808__auto___30842){
return (function (seq30806){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30806));
});})(g__28808__auto___30842))
;


var g__28808__auto___30846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28808__auto___30846){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30847 = arguments.length;
var i__28733__auto___30848 = (0);
while(true){
if((i__28733__auto___30848 < len__28732__auto___30847)){
args__28739__auto__.push((arguments[i__28733__auto___30848]));

var G__30849 = (i__28733__auto___30848 + (1));
i__28733__auto___30848 = G__30849;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30846))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30846){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30846),args);
});})(g__28808__auto___30846))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28808__auto___30846){
return (function (seq30807){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30807));
});})(g__28808__auto___30846))
;


var g__28808__auto___30850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28808__auto___30850){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30851 = arguments.length;
var i__28733__auto___30852 = (0);
while(true){
if((i__28733__auto___30852 < len__28732__auto___30851)){
args__28739__auto__.push((arguments[i__28733__auto___30852]));

var G__30853 = (i__28733__auto___30852 + (1));
i__28733__auto___30852 = G__30853;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30850))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30850){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30850),args);
});})(g__28808__auto___30850))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28808__auto___30850){
return (function (seq30808){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30808));
});})(g__28808__auto___30850))
;


var g__28808__auto___30854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28808__auto___30854){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30855 = arguments.length;
var i__28733__auto___30856 = (0);
while(true){
if((i__28733__auto___30856 < len__28732__auto___30855)){
args__28739__auto__.push((arguments[i__28733__auto___30856]));

var G__30857 = (i__28733__auto___30856 + (1));
i__28733__auto___30856 = G__30857;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30854))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30854){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30854),args);
});})(g__28808__auto___30854))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28808__auto___30854){
return (function (seq30809){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30809));
});})(g__28808__auto___30854))
;


var g__28808__auto___30858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28808__auto___30858){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30859 = arguments.length;
var i__28733__auto___30860 = (0);
while(true){
if((i__28733__auto___30860 < len__28732__auto___30859)){
args__28739__auto__.push((arguments[i__28733__auto___30860]));

var G__30861 = (i__28733__auto___30860 + (1));
i__28733__auto___30860 = G__30861;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30858))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30858){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30858),args);
});})(g__28808__auto___30858))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28808__auto___30858){
return (function (seq30810){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30810));
});})(g__28808__auto___30858))
;


var g__28808__auto___30862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28808__auto___30862){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30863 = arguments.length;
var i__28733__auto___30864 = (0);
while(true){
if((i__28733__auto___30864 < len__28732__auto___30863)){
args__28739__auto__.push((arguments[i__28733__auto___30864]));

var G__30865 = (i__28733__auto___30864 + (1));
i__28733__auto___30864 = G__30865;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30862))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30862){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30862),args);
});})(g__28808__auto___30862))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28808__auto___30862){
return (function (seq30811){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30811));
});})(g__28808__auto___30862))
;


var g__28808__auto___30866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28808__auto___30866){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30867 = arguments.length;
var i__28733__auto___30868 = (0);
while(true){
if((i__28733__auto___30868 < len__28732__auto___30867)){
args__28739__auto__.push((arguments[i__28733__auto___30868]));

var G__30869 = (i__28733__auto___30868 + (1));
i__28733__auto___30868 = G__30869;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30866))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30866){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30866),args);
});})(g__28808__auto___30866))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28808__auto___30866){
return (function (seq30812){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30812));
});})(g__28808__auto___30866))
;


var g__28808__auto___30870 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28808__auto___30870){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30871 = arguments.length;
var i__28733__auto___30872 = (0);
while(true){
if((i__28733__auto___30872 < len__28732__auto___30871)){
args__28739__auto__.push((arguments[i__28733__auto___30872]));

var G__30873 = (i__28733__auto___30872 + (1));
i__28733__auto___30872 = G__30873;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30870))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30870){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30870),args);
});})(g__28808__auto___30870))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28808__auto___30870){
return (function (seq30813){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30813));
});})(g__28808__auto___30870))
;


var g__28808__auto___30874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28808__auto___30874){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30875 = arguments.length;
var i__28733__auto___30876 = (0);
while(true){
if((i__28733__auto___30876 < len__28732__auto___30875)){
args__28739__auto__.push((arguments[i__28733__auto___30876]));

var G__30877 = (i__28733__auto___30876 + (1));
i__28733__auto___30876 = G__30877;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30874))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30874){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30874),args);
});})(g__28808__auto___30874))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28808__auto___30874){
return (function (seq30814){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30814));
});})(g__28808__auto___30874))
;


var g__28808__auto___30878 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28808__auto___30878){
return (function cljs$spec$impl$gen$return(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30879 = arguments.length;
var i__28733__auto___30880 = (0);
while(true){
if((i__28733__auto___30880 < len__28732__auto___30879)){
args__28739__auto__.push((arguments[i__28733__auto___30880]));

var G__30881 = (i__28733__auto___30880 + (1));
i__28733__auto___30880 = G__30881;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30878))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30878){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30878),args);
});})(g__28808__auto___30878))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28808__auto___30878){
return (function (seq30815){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30815));
});})(g__28808__auto___30878))
;


var g__28808__auto___30882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28808__auto___30882){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30883 = arguments.length;
var i__28733__auto___30884 = (0);
while(true){
if((i__28733__auto___30884 < len__28732__auto___30883)){
args__28739__auto__.push((arguments[i__28733__auto___30884]));

var G__30885 = (i__28733__auto___30884 + (1));
i__28733__auto___30884 = G__30885;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30882))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30882){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30882),args);
});})(g__28808__auto___30882))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28808__auto___30882){
return (function (seq30816){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30816));
});})(g__28808__auto___30882))
;


var g__28808__auto___30886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__28808__auto___30886){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30887 = arguments.length;
var i__28733__auto___30888 = (0);
while(true){
if((i__28733__auto___30888 < len__28732__auto___30887)){
args__28739__auto__.push((arguments[i__28733__auto___30888]));

var G__30889 = (i__28733__auto___30888 + (1));
i__28733__auto___30888 = G__30889;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28808__auto___30886))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28808__auto___30886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28808__auto___30886),args);
});})(g__28808__auto___30886))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__28808__auto___30886){
return (function (seq30817){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30817));
});})(g__28808__auto___30886))
;

var g__28821__auto___30911 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28821__auto___30911){
return (function cljs$spec$impl$gen$any(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30912 = arguments.length;
var i__28733__auto___30913 = (0);
while(true){
if((i__28733__auto___30913 < len__28732__auto___30912)){
args__28739__auto__.push((arguments[i__28733__auto___30913]));

var G__30914 = (i__28733__auto___30913 + (1));
i__28733__auto___30913 = G__30914;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30911))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30911){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30911);
});})(g__28821__auto___30911))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28821__auto___30911){
return (function (seq30890){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30890));
});})(g__28821__auto___30911))
;


var g__28821__auto___30915 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28821__auto___30915){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30916 = arguments.length;
var i__28733__auto___30917 = (0);
while(true){
if((i__28733__auto___30917 < len__28732__auto___30916)){
args__28739__auto__.push((arguments[i__28733__auto___30917]));

var G__30918 = (i__28733__auto___30917 + (1));
i__28733__auto___30917 = G__30918;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30915))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30915){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30915);
});})(g__28821__auto___30915))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28821__auto___30915){
return (function (seq30891){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30891));
});})(g__28821__auto___30915))
;


var g__28821__auto___30919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28821__auto___30919){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30920 = arguments.length;
var i__28733__auto___30921 = (0);
while(true){
if((i__28733__auto___30921 < len__28732__auto___30920)){
args__28739__auto__.push((arguments[i__28733__auto___30921]));

var G__30922 = (i__28733__auto___30921 + (1));
i__28733__auto___30921 = G__30922;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30919))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30919){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30919);
});})(g__28821__auto___30919))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28821__auto___30919){
return (function (seq30892){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30892));
});})(g__28821__auto___30919))
;


var g__28821__auto___30923 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28821__auto___30923){
return (function cljs$spec$impl$gen$char(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30924 = arguments.length;
var i__28733__auto___30925 = (0);
while(true){
if((i__28733__auto___30925 < len__28732__auto___30924)){
args__28739__auto__.push((arguments[i__28733__auto___30925]));

var G__30926 = (i__28733__auto___30925 + (1));
i__28733__auto___30925 = G__30926;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30923))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30923){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30923);
});})(g__28821__auto___30923))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28821__auto___30923){
return (function (seq30893){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30893));
});})(g__28821__auto___30923))
;


var g__28821__auto___30927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28821__auto___30927){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30928 = arguments.length;
var i__28733__auto___30929 = (0);
while(true){
if((i__28733__auto___30929 < len__28732__auto___30928)){
args__28739__auto__.push((arguments[i__28733__auto___30929]));

var G__30930 = (i__28733__auto___30929 + (1));
i__28733__auto___30929 = G__30930;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30927))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30927){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30927);
});})(g__28821__auto___30927))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28821__auto___30927){
return (function (seq30894){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30894));
});})(g__28821__auto___30927))
;


var g__28821__auto___30931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28821__auto___30931){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30932 = arguments.length;
var i__28733__auto___30933 = (0);
while(true){
if((i__28733__auto___30933 < len__28732__auto___30932)){
args__28739__auto__.push((arguments[i__28733__auto___30933]));

var G__30934 = (i__28733__auto___30933 + (1));
i__28733__auto___30933 = G__30934;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30931))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30931){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30931);
});})(g__28821__auto___30931))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28821__auto___30931){
return (function (seq30895){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30895));
});})(g__28821__auto___30931))
;


var g__28821__auto___30935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28821__auto___30935){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30936 = arguments.length;
var i__28733__auto___30937 = (0);
while(true){
if((i__28733__auto___30937 < len__28732__auto___30936)){
args__28739__auto__.push((arguments[i__28733__auto___30937]));

var G__30938 = (i__28733__auto___30937 + (1));
i__28733__auto___30937 = G__30938;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30935))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30935){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30935);
});})(g__28821__auto___30935))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28821__auto___30935){
return (function (seq30896){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30896));
});})(g__28821__auto___30935))
;


var g__28821__auto___30939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28821__auto___30939){
return (function cljs$spec$impl$gen$double(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30940 = arguments.length;
var i__28733__auto___30941 = (0);
while(true){
if((i__28733__auto___30941 < len__28732__auto___30940)){
args__28739__auto__.push((arguments[i__28733__auto___30941]));

var G__30942 = (i__28733__auto___30941 + (1));
i__28733__auto___30941 = G__30942;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30939))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30939){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30939);
});})(g__28821__auto___30939))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28821__auto___30939){
return (function (seq30897){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30897));
});})(g__28821__auto___30939))
;


var g__28821__auto___30943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28821__auto___30943){
return (function cljs$spec$impl$gen$int(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30944 = arguments.length;
var i__28733__auto___30945 = (0);
while(true){
if((i__28733__auto___30945 < len__28732__auto___30944)){
args__28739__auto__.push((arguments[i__28733__auto___30945]));

var G__30946 = (i__28733__auto___30945 + (1));
i__28733__auto___30945 = G__30946;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30943))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30943){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30943);
});})(g__28821__auto___30943))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28821__auto___30943){
return (function (seq30898){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30898));
});})(g__28821__auto___30943))
;


var g__28821__auto___30947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28821__auto___30947){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30948 = arguments.length;
var i__28733__auto___30949 = (0);
while(true){
if((i__28733__auto___30949 < len__28732__auto___30948)){
args__28739__auto__.push((arguments[i__28733__auto___30949]));

var G__30950 = (i__28733__auto___30949 + (1));
i__28733__auto___30949 = G__30950;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30947))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30947){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30947);
});})(g__28821__auto___30947))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28821__auto___30947){
return (function (seq30899){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30899));
});})(g__28821__auto___30947))
;


var g__28821__auto___30951 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28821__auto___30951){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30952 = arguments.length;
var i__28733__auto___30953 = (0);
while(true){
if((i__28733__auto___30953 < len__28732__auto___30952)){
args__28739__auto__.push((arguments[i__28733__auto___30953]));

var G__30954 = (i__28733__auto___30953 + (1));
i__28733__auto___30953 = G__30954;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30951))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30951){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30951);
});})(g__28821__auto___30951))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28821__auto___30951){
return (function (seq30900){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30900));
});})(g__28821__auto___30951))
;


var g__28821__auto___30955 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28821__auto___30955){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30956 = arguments.length;
var i__28733__auto___30957 = (0);
while(true){
if((i__28733__auto___30957 < len__28732__auto___30956)){
args__28739__auto__.push((arguments[i__28733__auto___30957]));

var G__30958 = (i__28733__auto___30957 + (1));
i__28733__auto___30957 = G__30958;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30955))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30955){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30955);
});})(g__28821__auto___30955))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28821__auto___30955){
return (function (seq30901){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30901));
});})(g__28821__auto___30955))
;


var g__28821__auto___30959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28821__auto___30959){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30960 = arguments.length;
var i__28733__auto___30961 = (0);
while(true){
if((i__28733__auto___30961 < len__28732__auto___30960)){
args__28739__auto__.push((arguments[i__28733__auto___30961]));

var G__30962 = (i__28733__auto___30961 + (1));
i__28733__auto___30961 = G__30962;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30959))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30959){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30959);
});})(g__28821__auto___30959))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28821__auto___30959){
return (function (seq30902){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30902));
});})(g__28821__auto___30959))
;


var g__28821__auto___30963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28821__auto___30963){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30964 = arguments.length;
var i__28733__auto___30965 = (0);
while(true){
if((i__28733__auto___30965 < len__28732__auto___30964)){
args__28739__auto__.push((arguments[i__28733__auto___30965]));

var G__30966 = (i__28733__auto___30965 + (1));
i__28733__auto___30965 = G__30966;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30963))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30963){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30963);
});})(g__28821__auto___30963))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28821__auto___30963){
return (function (seq30903){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30903));
});})(g__28821__auto___30963))
;


var g__28821__auto___30967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28821__auto___30967){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30968 = arguments.length;
var i__28733__auto___30969 = (0);
while(true){
if((i__28733__auto___30969 < len__28732__auto___30968)){
args__28739__auto__.push((arguments[i__28733__auto___30969]));

var G__30970 = (i__28733__auto___30969 + (1));
i__28733__auto___30969 = G__30970;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30967))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30967){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30967);
});})(g__28821__auto___30967))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28821__auto___30967){
return (function (seq30904){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30904));
});})(g__28821__auto___30967))
;


var g__28821__auto___30971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28821__auto___30971){
return (function cljs$spec$impl$gen$string(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30972 = arguments.length;
var i__28733__auto___30973 = (0);
while(true){
if((i__28733__auto___30973 < len__28732__auto___30972)){
args__28739__auto__.push((arguments[i__28733__auto___30973]));

var G__30974 = (i__28733__auto___30973 + (1));
i__28733__auto___30973 = G__30974;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30971))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30971){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30971);
});})(g__28821__auto___30971))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28821__auto___30971){
return (function (seq30905){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30905));
});})(g__28821__auto___30971))
;


var g__28821__auto___30975 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28821__auto___30975){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30976 = arguments.length;
var i__28733__auto___30977 = (0);
while(true){
if((i__28733__auto___30977 < len__28732__auto___30976)){
args__28739__auto__.push((arguments[i__28733__auto___30977]));

var G__30978 = (i__28733__auto___30977 + (1));
i__28733__auto___30977 = G__30978;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30975))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30975){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30975);
});})(g__28821__auto___30975))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28821__auto___30975){
return (function (seq30906){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30906));
});})(g__28821__auto___30975))
;


var g__28821__auto___30979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28821__auto___30979){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30980 = arguments.length;
var i__28733__auto___30981 = (0);
while(true){
if((i__28733__auto___30981 < len__28732__auto___30980)){
args__28739__auto__.push((arguments[i__28733__auto___30981]));

var G__30982 = (i__28733__auto___30981 + (1));
i__28733__auto___30981 = G__30982;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30979))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30979){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30979);
});})(g__28821__auto___30979))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28821__auto___30979){
return (function (seq30907){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30907));
});})(g__28821__auto___30979))
;


var g__28821__auto___30983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28821__auto___30983){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30984 = arguments.length;
var i__28733__auto___30985 = (0);
while(true){
if((i__28733__auto___30985 < len__28732__auto___30984)){
args__28739__auto__.push((arguments[i__28733__auto___30985]));

var G__30986 = (i__28733__auto___30985 + (1));
i__28733__auto___30985 = G__30986;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30983))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30983){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30983);
});})(g__28821__auto___30983))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28821__auto___30983){
return (function (seq30908){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30908));
});})(g__28821__auto___30983))
;


var g__28821__auto___30987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28821__auto___30987){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30988 = arguments.length;
var i__28733__auto___30989 = (0);
while(true){
if((i__28733__auto___30989 < len__28732__auto___30988)){
args__28739__auto__.push((arguments[i__28733__auto___30989]));

var G__30990 = (i__28733__auto___30989 + (1));
i__28733__auto___30989 = G__30990;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30987))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30987){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30987);
});})(g__28821__auto___30987))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28821__auto___30987){
return (function (seq30909){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30909));
});})(g__28821__auto___30987))
;


var g__28821__auto___30991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28821__auto___30991){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30992 = arguments.length;
var i__28733__auto___30993 = (0);
while(true){
if((i__28733__auto___30993 < len__28732__auto___30992)){
args__28739__auto__.push((arguments[i__28733__auto___30993]));

var G__30994 = (i__28733__auto___30993 + (1));
i__28733__auto___30993 = G__30994;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});})(g__28821__auto___30991))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28821__auto___30991){
return (function (args){
return cljs.core.deref.call(null,g__28821__auto___30991);
});})(g__28821__auto___30991))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28821__auto___30991){
return (function (seq30910){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30910));
});})(g__28821__auto___30991))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28739__auto__ = [];
var len__28732__auto___30997 = arguments.length;
var i__28733__auto___30998 = (0);
while(true){
if((i__28733__auto___30998 < len__28732__auto___30997)){
args__28739__auto__.push((arguments[i__28733__auto___30998]));

var G__30999 = (i__28733__auto___30998 + (1));
i__28733__auto___30998 = G__30999;
continue;
} else {
}
break;
}

var argseq__28740__auto__ = ((((0) < args__28739__auto__.length))?(new cljs.core.IndexedSeq(args__28739__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28740__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__30995_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30995_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq30996){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30996));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__31000_SHARP_){
return (new Date(p1__31000_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map