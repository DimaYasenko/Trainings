(ns chapter-2.core
  (:gen-class))

(+ 1 2)

(def my-addition (fn [first-argument second-argument] (+ first-argument second-argument)))

(println "Hello, World!")

(doc +)
(doc doc)
(doc source)
(source doc)

(find-doc "lazy")
(apropos "doc")

;;; this function does addition
(defn addition [x y]
  (+ x y))

(comment
  (+ 1 2 3))

(list 1 2 3 4 5)

(conj (list 1 2 3 4) 5)

(peek (list 1 2 3))
(pop (list 1 2 3))
(count (list 1 2 3))
(peek (list))
(pop (list))

(vector 1 2 3 4)
[1 2 3 4]
(vector? [ 1 2 3])
(nth [1 2 3 4] 1)
(get [1 2 3 4] 1)
([1 2 3 4] 1)

{:a 1 :b 2 :c 3}
(assoc {} :a 1)

(type (cons 1 (list 2 3)))
(println (cons 1 (list 2 3)))

(source +)

(let [x 1
      y 2
      z (+ x y)
      _ (println z)]
  (+ x y z))

(do
  (println "One")
  (println "Two")
  (println "Three"))

(if (< 1 2)
  :then
  :else)

(if-not (< 1 2)
  :then
  :else)

(def x 1)

(cond
  (= 0 x) "zero"
  (< 0 x) "Positive"
  (> 0 x) "Negative")

(when (< 0 x)
  (println "x is positive")
  (println "I suppose"))

(when-not (> 0 x)
  (println "Still true"))

(* 1 2 3 4)
(* 1 2 3 4 5)


(defn factorial [n]
  (loop [currentMultiplier 1
         result 1]
    (if (> currentMultiplier n)
      result
      (recur (inc currentMultiplier) (* currentMultiplier result)))))

(defn run-report [user]
  (println "Running report for " user))

(defn dispatch-reporting-jobs [all-users]
  (doseq [user all-users]
    (run-report user)))

(dotimes [x 5]
  (println "x - " x))

;;; map, filter, reduce


(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 2: finished"))
