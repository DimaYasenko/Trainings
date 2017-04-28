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

(def user {:login "rob" :salary 100000 :referrer "mint.com"})
(defn fee-amount [percentage user]
  (with-precision 16 :rounding HALF_EVEN
    (* 0.01 percentage (:salary user))))

(defn affiliate-fee [user]
  (case (:referrer user)
    "mint.com" (fee-amount 0.03M user)
    "google.com" (fee-amount 0.01M user)
    (fee-amount 0.02M user)))

(defmulti affiliate-fee-multi :referrer :default "*")

(defmethod affiliate-fee-multi "mint.com" [user]
  (fee-amount 0.03M user))

(defmethod affiliate-fee-multi "google.com" [user]
  (fee-amount 0.01 user))

(defmethod affiliate-fee-multi "*" [user]
  (fee-amount 0.02 user))

;;; in order to redefine multimethod user must unmap it with the following line of code
(ns-unmap 'chapter-4.core 'affiliate-fee-multi)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 4: not ready yet"))
