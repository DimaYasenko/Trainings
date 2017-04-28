(ns chapter-2.core-test
  (:require [clojure.test :refer :all]
            [chapter-2.core :refer :all]))

(deftest my-addition-test
  (testing "Arithmetic"
    (testing "Positive numbers"
      (is (= 130 (my-addition 100 30)))
      (is (= 13  (my-addition 4 9))))
    (testing "Negative numbers"
      (is (= -20 (my-addition -10 -10)))
      (is (= -130 (my-addition -10 -120))))
    (testing "Operations with zero"
      (is (= -10 (my-addition -10 0)))
      (is (= 120 (my-addition 120 0)))
      (is (= 0 (my-addition 0 0))))))

(deftest addition-test
  (testing "Arithmetic"
    (testing "Positive numbers"
      (is (= 130 (addition 100 30)))
      (is (= 13  (addition 4 9))))
    (testing "Negative numbers"
      (is (= -20 (addition -10 -10)))
      (is (= -130 (addition -10 -120))))
    (testing "Operations with zero"
      (is (= -10 (addition -10 0)))
      (is (= 120 (addition 120 0)))
      (is (= 0 (addition 0 0))))))

(deftest factorial-test
  (testing "Testing factorial function with different arguments"
    (is (= 1 (factorial 1)))
    (is (= 2 (factorial 2)))
    (is (= 6 (factorial 3)))
    (is (= 24 (factorial 4)))
    (is (= 120 (factorial 5)))))
