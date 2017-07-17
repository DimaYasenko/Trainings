(ns introduction.core
  (:gen-class))


(list 1 2 3)
[1 2 3]
{:one 1 :two 2}
#{:one :two :three}


(defn square [x]
  (* x x))


(square 5)
(square 6)


(defn ^{:doc "Function that calculates BMI index of the body"}
  bmi [height weight]
  (/ weight (* height height)))


(map square [1 2 3 4 5])


(filter even? (map square [1 2 3 4 5]))


(defn concat-fields [& fields]
  (clojure.string/join ", " (remove empty? fields)))


(defn make-greeting [greeting]
  (fn [guest-name]
    (println greeting guest-name)))

(let [greeting (make-greeting "Let me greet you dear, ")]
  (greeting "Dima")
  (greeting "Alesya"))


(reduce + (interpose 5 (map inc (range 10))))


(->> (range 10) (map inc) (interpose 5) (reduce +))





(defn -main [& args]
  (println "Introduction: not ready yet"))
