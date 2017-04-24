(ns chapter-7.core
  (:require [clojure.walk :as walk])
  (:gen-class))

(def a-ref (ref 0))

(dosync
 (ref-set a-ref 1))

(defmacro sync-set [reference value]
  (list 'dosync
        (list 'ref-set reference value)))

(sync-set a-ref 3)

(defn exhibits-oddity-1 [number]
  (if (odd? number)
    (println "Very odd!")))

(defn unless-2 [test then]
  (if (not test)
    then))

(defn exhibits-oddity-2 [number]
  (unless-2 (even? number)
            (println "Very odd!")))

(defmacro unless-3 [test then]
  (list 'if (list 'not test)
        then))

(defn exhibits-oddity-3 [number]
  (unless-3 (even? number)
            (println "Very odd!")))

(macroexpand '(unless-3 (even? 5) (println "Odd!")))
(walk/macroexpand-all '(unless-3 (even? 5) (println "Odd!")))

(defmacro unless-4 [test then]
  `(if (not ~test)
     ~then))

(defn exhibits-oddity-4 [number]
  (unless-4 (even? number)
            (println "Very odd!")))

(defmacro unless-5 [test & then]
  `(if (not ~test)
     (do ~@then)))

(defn exhibits-oddity-5 [number]
  (unless-5 (even? number)
            (println "Hello!")
            (println "Very odd!")))

(defmacro def-logged-function [funciton-name args & body]
  `(defn ~funciton-name ~args
     (let [now# (System/currentTimeMillis)]
       (println "Function '" (str (var ~funciton-name))  "' was called at " now#)
       ~@body)))

(def-logged-function print-report [report-name]
  (println "Report: " report-name " was printed"))

(defmacro my-comment [& expressions])

(my-comment
 (do
   (println "Hello")
   (println "Hello")))

(defmacro declare [& names]
  `(do
     ~@(map #(list 'def %) names)))





(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 7"))
