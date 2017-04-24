(ns chapter-4.core
  (:gen-class))

(defn ad-hoc-namer [object]
  (condp = (type object)
      java.lang.String "string"
      clojure.lang.PersistentVector "vector"))

(ad-hoc-namer "I am a string")
(ad-hoc-namer [])
(ad-hoc-namer {})

(def type-name-mappings
  {java.lang.String (fn [] "string")
   clojure.lang.PersistentVector (fn [] "vector")
   clojure.lang.PersistentArrayMap (fn [] "map")})

(defn open-ad-hoc-namer [object]
  (let [object-type (type object)]
    (if-let [implementation (get type-name-mappings object-type)]
      (implementation)
      (throw (IllegalArgumentException. (str "No implementation for " object-type))))))

(open-ad-hoc-namer "I am a string")
(open-ad-hoc-namer [])
(open-ad-hoc-namer {})


(defn subtype-namer [object]
  (cond
    (instance? clojure.lang.APersistentMap object) "map"
    :else (throw (IllegalArgumentException. "Type not found"))))

(subtype-namer {})
(subtype-namer (sorted-map))
(subtype-namer (array-map))
(subtype-namer (hash-map))



(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 4: not ready yet"))
