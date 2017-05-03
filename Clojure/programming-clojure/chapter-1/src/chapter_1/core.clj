(ns chapter-1.core
  (:gen-class))

(defn blank? [str]
  (every? #(Character/isWhitespace %) str))

(defrecord Person [first-name last-name])

(def some-person (->Person "Dima" "Yasenko"))

(System/getProperties)

(def visitors (atom #{}))

(defn hello [name]
  (swap! visitors conj name)
  (str "Hello, " name "!"))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 1: not ready yet"))
