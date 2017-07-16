(ns chapter-1.core
  (:import [java.util.List])
  (:gen-class))

(for [x [:a :b], y  (range 5) :when (odd? y)]
  [x y])

(doseq [x [:a :b], y (range 5) :when (odd? y)]
  (println x y))


(doseq [x (range 5)
        y (reverse (range 5))
        z (range 5)]
  (println x y z))

(+ 1 2 3)

(defn r->lfix
  ([first-argument operator second-argument] (operator first-argument second-argument))
  ([first-argument first-operator second-argument second-operator third-argument]
   (first-operator first-argument (second-operator second-argument third-argument))))

(r->lfix 1 + 2 * 3)

(def order {+ 0 - 0 * 1 / 1})

(defn infix [first-argument first-operator second-argument second-operator third-argument]
  (if (< (get order first-operator) (get order second-operator))
    (first-operator first-argument (second-operator second-argument third-argument))
    (second-operator (first-operator first-argument second-argument) third-argument)))

(infix 1 + 2 * 3)

(infix 2 * 2 + 5)

(defprotocol Concatenatable
  (cat [this other]))

(extend-type String
  Concatenatable
  (cat [this other]
    (.concat this other)))

(cat "House" " of wolves.")

(new java.util.List)

(extend-type java.util.List
  Concatenatable
  (cat [this other]
    (concat this other)))

;;; (cat [1 2 3] [4 5 6])

(defn -main [& args]
  (println "Chapter 1: done"))
