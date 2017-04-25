// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29804){
var map__29829 = p__29804;
var map__29829__$1 = ((((!((map__29829 == null)))?((((map__29829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29829):map__29829);
var m = map__29829__$1;
var n = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29829__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29831_29853 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29832_29854 = null;
var count__29833_29855 = (0);
var i__29834_29856 = (0);
while(true){
if((i__29834_29856 < count__29833_29855)){
var f_29857 = cljs.core._nth.call(null,chunk__29832_29854,i__29834_29856);
cljs.core.println.call(null,"  ",f_29857);

var G__29858 = seq__29831_29853;
var G__29859 = chunk__29832_29854;
var G__29860 = count__29833_29855;
var G__29861 = (i__29834_29856 + (1));
seq__29831_29853 = G__29858;
chunk__29832_29854 = G__29859;
count__29833_29855 = G__29860;
i__29834_29856 = G__29861;
continue;
} else {
var temp__4657__auto___29862 = cljs.core.seq.call(null,seq__29831_29853);
if(temp__4657__auto___29862){
var seq__29831_29863__$1 = temp__4657__auto___29862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29831_29863__$1)){
var c__28468__auto___29864 = cljs.core.chunk_first.call(null,seq__29831_29863__$1);
var G__29865 = cljs.core.chunk_rest.call(null,seq__29831_29863__$1);
var G__29866 = c__28468__auto___29864;
var G__29867 = cljs.core.count.call(null,c__28468__auto___29864);
var G__29868 = (0);
seq__29831_29853 = G__29865;
chunk__29832_29854 = G__29866;
count__29833_29855 = G__29867;
i__29834_29856 = G__29868;
continue;
} else {
var f_29869 = cljs.core.first.call(null,seq__29831_29863__$1);
cljs.core.println.call(null,"  ",f_29869);

var G__29870 = cljs.core.next.call(null,seq__29831_29863__$1);
var G__29871 = null;
var G__29872 = (0);
var G__29873 = (0);
seq__29831_29853 = G__29870;
chunk__29832_29854 = G__29871;
count__29833_29855 = G__29872;
i__29834_29856 = G__29873;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29874 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27657__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27657__auto__)){
return or__27657__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29874);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29874)))?cljs.core.second.call(null,arglists_29874):arglists_29874));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29835_29875 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29836_29876 = null;
var count__29837_29877 = (0);
var i__29838_29878 = (0);
while(true){
if((i__29838_29878 < count__29837_29877)){
var vec__29839_29879 = cljs.core._nth.call(null,chunk__29836_29876,i__29838_29878);
var name_29880 = cljs.core.nth.call(null,vec__29839_29879,(0),null);
var map__29842_29881 = cljs.core.nth.call(null,vec__29839_29879,(1),null);
var map__29842_29882__$1 = ((((!((map__29842_29881 == null)))?((((map__29842_29881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29842_29881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29842_29881):map__29842_29881);
var doc_29883 = cljs.core.get.call(null,map__29842_29882__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29884 = cljs.core.get.call(null,map__29842_29882__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29880);

cljs.core.println.call(null," ",arglists_29884);

if(cljs.core.truth_(doc_29883)){
cljs.core.println.call(null," ",doc_29883);
} else {
}

var G__29885 = seq__29835_29875;
var G__29886 = chunk__29836_29876;
var G__29887 = count__29837_29877;
var G__29888 = (i__29838_29878 + (1));
seq__29835_29875 = G__29885;
chunk__29836_29876 = G__29886;
count__29837_29877 = G__29887;
i__29838_29878 = G__29888;
continue;
} else {
var temp__4657__auto___29889 = cljs.core.seq.call(null,seq__29835_29875);
if(temp__4657__auto___29889){
var seq__29835_29890__$1 = temp__4657__auto___29889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29835_29890__$1)){
var c__28468__auto___29891 = cljs.core.chunk_first.call(null,seq__29835_29890__$1);
var G__29892 = cljs.core.chunk_rest.call(null,seq__29835_29890__$1);
var G__29893 = c__28468__auto___29891;
var G__29894 = cljs.core.count.call(null,c__28468__auto___29891);
var G__29895 = (0);
seq__29835_29875 = G__29892;
chunk__29836_29876 = G__29893;
count__29837_29877 = G__29894;
i__29838_29878 = G__29895;
continue;
} else {
var vec__29844_29896 = cljs.core.first.call(null,seq__29835_29890__$1);
var name_29897 = cljs.core.nth.call(null,vec__29844_29896,(0),null);
var map__29847_29898 = cljs.core.nth.call(null,vec__29844_29896,(1),null);
var map__29847_29899__$1 = ((((!((map__29847_29898 == null)))?((((map__29847_29898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29847_29898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29847_29898):map__29847_29898);
var doc_29900 = cljs.core.get.call(null,map__29847_29899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29901 = cljs.core.get.call(null,map__29847_29899__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29897);

cljs.core.println.call(null," ",arglists_29901);

if(cljs.core.truth_(doc_29900)){
cljs.core.println.call(null," ",doc_29900);
} else {
}

var G__29902 = cljs.core.next.call(null,seq__29835_29890__$1);
var G__29903 = null;
var G__29904 = (0);
var G__29905 = (0);
seq__29835_29875 = G__29902;
chunk__29836_29876 = G__29903;
count__29837_29877 = G__29904;
i__29838_29878 = G__29905;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__29849 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29850 = null;
var count__29851 = (0);
var i__29852 = (0);
while(true){
if((i__29852 < count__29851)){
var role = cljs.core._nth.call(null,chunk__29850,i__29852);
var temp__4657__auto___29906__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29906__$1)){
var spec_29907 = temp__4657__auto___29906__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29907));
} else {
}

var G__29908 = seq__29849;
var G__29909 = chunk__29850;
var G__29910 = count__29851;
var G__29911 = (i__29852 + (1));
seq__29849 = G__29908;
chunk__29850 = G__29909;
count__29851 = G__29910;
i__29852 = G__29911;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29849);
if(temp__4657__auto____$1){
var seq__29849__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29849__$1)){
var c__28468__auto__ = cljs.core.chunk_first.call(null,seq__29849__$1);
var G__29912 = cljs.core.chunk_rest.call(null,seq__29849__$1);
var G__29913 = c__28468__auto__;
var G__29914 = cljs.core.count.call(null,c__28468__auto__);
var G__29915 = (0);
seq__29849 = G__29912;
chunk__29850 = G__29913;
count__29851 = G__29914;
i__29852 = G__29915;
continue;
} else {
var role = cljs.core.first.call(null,seq__29849__$1);
var temp__4657__auto___29916__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29916__$2)){
var spec_29917 = temp__4657__auto___29916__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29917));
} else {
}

var G__29918 = cljs.core.next.call(null,seq__29849__$1);
var G__29919 = null;
var G__29920 = (0);
var G__29921 = (0);
seq__29849 = G__29918;
chunk__29850 = G__29919;
count__29851 = G__29920;
i__29852 = G__29921;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map