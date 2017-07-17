(ns chapter-1.core
  (:gen-class))

(defn greeting [name]
  (str "Hello, " name "!"))

(defn blank? [str]
  (every? #(Character/isWhitespace %) str))

(defrecord Person [first-name last-name])

(def person (->Person "Bob" "Johnson"))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 1: not ready yet"))
