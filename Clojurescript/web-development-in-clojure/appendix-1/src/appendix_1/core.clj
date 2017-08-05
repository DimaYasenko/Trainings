(ns appendix-1.core
  (:require [appendix-1.colors :as colors])
  (:import [java.io File FileInputStream FileOutputStream])
  (:gen-class))

;;; data types
(list 1 2 3)
'(1 2 3)
[1 2 3]
(vec '(1 2 3))
(vector 1 2 3)
#{1 2 3}
{:first 1 :second 2}

;;; anonymous function
((fn [arg] (println arg)) "hello")

(#(println %1 %2 %3) "Hello" "from" "Dima!")

;;; named functions
(def square-1 (fn [x] (* x x)))

(defn square-2 [x]
  (* x x))

(defn bmi [height weight]
  (println "height:" height)
  (println "weight:" weight)
  (/ weight (square-2 height)))

;;; higher-order funcitons
(map #(* % %) [1 2 3 4 5])

(filter even? (map #(* 3 %) [1 2 3 4 5]))

(defn concat-fields [& fields]
  (clojure.string/join ", " (remove empty? fields)))

(concat-fields "" "1 Main Street" "Toronto" nil "Canada")


;;; closures

(defn greeting [phrase]
  (fn [name]
    (println phrase name)))

(let [greet (greeting "Welcome to the wonderful world of the Clojure")]
  (greet "Jane")
  (greet "John"))

;;; threding expressions

(reduce + (interpose 5 (map inc (range 10))))

(->> (range 10) (map inc) (interpose 5) (reduce +))


;;; destructuring data

(let [[small big] (split-with #(< % 5) (range 10))]
  (println small big))

(defn print-user [[first-name last-name phone]]
  (println "Mr." first-name last-name phone))

(print-user ["Dima" "Yasenko" "7770745346"])

(defn many-arugments [& args]
  (println args))

(many-arugments "a" "b" "c")

(let [{foo :foo bar :bar} {:foo 1 :bar 2}]
  (println foo bar))

;;; namespaces
(colors/hex->rgb "#33d24f")

;;; dynamic variables
(declare ^:dynamic *foo*)

(println *foo*)

(binding [*foo* "I exist!"]
  (println *foo*))

;;; polymorphism

(defmulti area :shape)

(defmethod area :circle [{:keys [r]}]
  (* Math/PI r r))

(defmethod area :rectangle [{:keys [l w]}]
  (* l w))

(defmethod area :default [shape]
  (throw (new Exception (str "Unrecognized shape:" shape))))

(area {:shape :circle :r 10})
(area {:shape :rectangle :l 2 :w 5})
(area {:shape :cube :l 5})

(defprotocol Foo
  "Foo doc string"
  (bar [this b] "bar doc string")
  (baz [this] [this b] "baz doc string"))

(deftype Bar [data]
  Foo
  (bar [this param]
    (println data param))
  (baz [this]
    (println (class this)))
  (baz [this param]
    (println param)))

(let [b (Bar. "some data")]
  (.bar b "param")
  (.baz b)
  (.baz b "baz with param"))

(extend-protocol Foo String
                 (bar [this param] (println this param)))

(bar "hello" "world")

;;; calling out Java

(let [f (new File ".")]
  (println (.getAbsolutePath f)))

(Math/sqrt 256)

(.getBytes (.getAbsolutePath (File. ".")))
(.. (File. ".") getAbsolutePath getBytes)

(defn -main [& args]
  (println "Appendix 1: Clojure Primer (done)"))
