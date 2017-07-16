(ns chapter-2.core
  (:require [clojure.set :as s])
  (:gen-class))

[127 0x7F 0177 32r3V 2r01111111]

22/7
(type 7/22)

(def yukcy-pi 22/7)
yukcy-pi
(double yukcy-pi)

:this-is-keyword
(keyword? (keyword "some-keyword"))

(list 1 2 3)
[1 2 3]
(vector 1 2 3)
(not= [] nil)
#{:one :two :three}
{:one 1
 :two 2
 :three 3}

(def y 2)
y

((fn [x y]
   (println "Making a set...")
   #{x y}) 5 6)

(defn make-set [x y]
  (println "Making a set...")
  #{x y})

(make-set 1 2)

(defn make-set-2
  ([x] #{x})
  ([x y] #{x y}))

(make-set-2 2)
(make-set-2 3 4)

(defn arity2+ [first-argument second-argument & more]
  (vector first-argument second-argument more))

(arity2+ 1 2 3 4 5 6)

(def some-anonymous-function #(println %1 %2))

(some-anonymous-function 4 65)

(do
  (def x 5)
  (def y 4)
  (def z (+ x y))
  [x y z])

(let [r 5
      pi 3.1415
      r-squared (* r r)]
  (* pi r-squared))

(defn sum [from to]
  (loop [total 0
         item from]
    (if (> item to)
      total
      (recur (+ total item) (inc item)))))

(defn abs [x]
  (if (pos? x)
    x
    (- x)))

(cons 1 [2 3])

(quote age)

(def age 9)
age
(quote age)

(quote (cons 1 [2 3]))

;;; (cons 1 (2 3)) Class cast exception

(cons 1 (quote (2 3)))

(cons 1 '(2 3))

[1 (+ 2 3)]
'(1 (+ 2 3))

`(map even? (1 2 3 4))

java.util.Locale/JAPAN

(Math/sqrt 9)

(new java.awt.Point 2 3)

(java.awt.Point. 2 3)

(.-x (java.awt.Point. 20 30))

(.divide (java.math.BigDecimal. "42") 2M)

(let [origin (java.awt.Point. 10 20)]
  (set! (.-x origin) 5)
  (str origin))

(.. (java.util.Date.) toString (endsWith "2017"))

(doto (java.util.HashMap.)
  (.put "Home" "/home/me")
  (.put "SRC" "src")
  (.put "BIN" "classes"))



;;; Exceptions

(throw (new Exception "some exception"))

(defn try-catch [f]
  (try
    (f)
    (catch ArithmeticException e "Division by zero")
    (catch Exception e (str "you are so bad: " (.getMessage e)))
    (finally (println "returning value..."))))

(try-catch #(/ 10 2))

(try-catch #(/ 10 0))

(try-catch #(throw (new Exception "Crybaby")))

(s/intersection #{1 2 3} #{3 4 5})

(defn -main [& args]
  (println "Chapter 2: Done"))
